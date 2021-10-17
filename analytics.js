const redisClient = require('redis').createClient()
const { Storage } = require('@google-cloud/storage')
const { MongoClient } = require('mongodb')
var QrCode = require('qrcode-reader');
var qr = new QrCode();
var fs = require('fs')
var Jimp = require("jimp");
const uri = "mongodb+srv://123:123@cluster0.ahl2h.mongodb.net/Ariel?retryWrites=true&w=majority"
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
mongoClient.connect(err => {
    if (err) {
        console.error(err)
        mongoClient.close()
    }
})
const collection = mongoClient.db('Ariel').collection('Packages')
const getFromFirebase = async () => {
    const storage = new Storage({
        keyFilename: 'bigdata-6c44f-firebase-adminsdk-sgery-cabb327f0e.json',
    });
    let bucketName = 'gs://bigdata-6c44f.appspot.com'

    const files = await storage.bucket(bucketName).getFiles('*')

    files[0].forEach(async (file) => {
        const path = 'images/QR/' + file.name
        await file.download({ destination: path })
        decodeQR(path, file.name)
        file.delete()
        fs.rmSync(path)
    })
}

/* Retrieving delivered packages from firebase - as QRCode png images */
setInterval(() => {
    getFromFirebase()
}, 10000)


/* Decoding the QR image to a JSON */
const decodeQR = (path, name) => {
    var buffer = fs.readFileSync(path)
    Jimp.read(buffer, function (err, image) {
        if (err) {
            console.error(err)
        }
        var qr = new QrCode();
        qr.callback = function (err, value) {
            var delimeter = name.indexOf('.')
            fileName = name.substr(0, delimeter)
            console.log('-\t'+fileName+'\t-')
            if (err) {
                getFromRedis(name)
            }
            else {
                const pack = JSON.parse(value.result)
                console.log(`got from QR\n`,pack,'\n')

                uploadMongo(pack)
            }
            redisClient.del(`delivered_${fileName}`, (err, reply) => {
                if (err) console.error(err)
                else console.log(`delivered_${fileName} deleted from redis`)
            })
        }
        qr.decode(image.bitmap);

    })
}

const getFromRedis = (name) => {
    var delimeter = name.indexOf('.')
    name = name.substr(0, delimeter)
    redisClient.get(`delivered_${name}`, (err, reply) => {
        if(err) console.error(err)
        else{
            const pack = JSON.parse(reply)
            uploadMongo(pack)
            console.log('Got from Redis:\n', pack, '\n')
        }
    })

}

/* Upload parsed object to MongoDB DataBase - as a Document */
const uploadMongo = (doc) => {
    collection.insertOne(doc, (error, result) => {
        if (error) console.log(error)
        else {
            console.log('[+]\t', doc.TrackID, ' insereted to mongo')
        }
    })
}