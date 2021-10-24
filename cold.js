const redisClient = require('redis').createClient()
const { Storage } = require('@google-cloud/storage')
const { MongoClient } = require('mongodb')
var QrCode = require('qrcode-reader');
var fs = require('fs')
var Jimp = require("jimp");
const uri = "mongodb+srv://123:123@cluster0.ahl2h.mongodb.net/Ariel?retryWrites=true&w=majority"
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

/* Connecting to Atlas MongoDB database and collection */
mongoClient.connect(err => {
    if (err) {
        console.error(err)
        mongoClient.close()
    }
})

const collection = mongoClient.db('Ariel').collection('Packages') //    Connecting to the collection

/* Downloading QRCodes from firebase storage using generated JSON keyFile*/
const getFromFirebase = async () => {
    const storage = new Storage({
        keyFilename: 'bigdata-6c44f-firebase-adminsdk-sgery-cabb327f0e.json',
    });
    let bucketName = 'gs://bigdata-6c44f.appspot.com'

    const files = await storage.bucket(bucketName).getFiles('*')    //  Getting all files from storage

    files[0].forEach(async (file) => {  //  for each file in storage: download -> decode -> delete
        const path = 'images/QR/' + file.name
        await file.download({ destination: path })
        decodeQR(path, file.name)
        file.delete()
        fs.rmSync(path)
    })
}



/* Decoding the QR image to a JSON */
const decodeQR = (path, name) => {
    var buffer = fs.readFileSync(path)
    Jimp.read(buffer, function (err, image) {
        if (err) {
            console.error(err)
        }
        var qr = new QrCode();
        qr.callback = async function (err, value) {
            var delimeter = name.indexOf('.')
            fileName = name.substr(0, delimeter)
            if (err || !value.result) {
                await getFromRedis(name)
            }
            else {
                const pack = JSON.parse(value.result)
                console.log(`${pack.TrackID}\tgot from QR`)

                uploadMongo(pack)
            }
            redisClient.del(`delivered_${fileName}`, (err, reply) => {
                if (err) console.error(err)
            })
        }
        qr.decode(image.bitmap);

    })
}

/* Retrieve package information if QR decoding fails */
const getFromRedis = async (name) => {
    var delimeter = name.indexOf('.')
    name = name.substr(0, delimeter)
    await redisClient.get(`delivered_${name}`, (err, reply) => {
        if (err) console.error(err)
        else {
            const pack = JSON.parse(reply)
            if (pack == null) console.error('REDIS: null object: ', name)
            else {
                uploadMongo(pack)
                console.log(`${pack.TrackID}\tGot from REDIS`)
            }
        }
    })

}

/* Upload parsed object to MongoDB DataBase - as a Document */
const uploadMongo = (doc) => {
    collection.insertOne(doc, (error, result) => {
        if (error) console.error(error)
        else {
            console.log('[+]\t', doc.TrackID, ' insereted to mongo')
        }
    })
}

const main = async () => {
    /* Cleaning Firebase Storage */
    const storage = new Storage({
        keyFilename: 'bigdata-6c44f-firebase-adminsdk-sgery-cabb327f0e.json',
    });
    let bucketName = 'gs://bigdata-6c44f.appspot.com'

    const files = await storage.bucket(bucketName).getFiles('*')

    files[0].forEach(async (file) => {  
        file.delete()
    })

    console.log('Cold Connection is Ready!')
    /* Retrieving delivered packages from firebase - as QRCode png images */
    setInterval(() => {
        getFromFirebase()
    }, 10000)

}

main()