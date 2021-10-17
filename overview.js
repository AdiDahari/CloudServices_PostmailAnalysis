// const {Storage} = require('@google-cloud/storage');
const express = require("express");
const SocketIO = require('socket.io')
const app = express();
const server = express().use(app).listen(3000, ()=>{
    console.log(`Listening Socket on http://localhost:3000`);
})
const io = SocketIO(server)
io.on('connection', (socket) =>{
    socket.on('newdata', (msg) => {
        console.log(msg)
        io.emit('newdata')
    })
})
const Kafka = require('node-rdkafka');
const broker = require('redis').createClient()
const client = broker.duplicate()
app.use(express.static('public'))
app.set('view engine', 'ejs')


/* Subscribing to each district's channel - redis subscription */
client.subscribe(['Dan', 'Central', 'Haifa', 'Southern'])

/* Each district assigned with relevant arrival delay (as realistic as possible) */
const arrivalDelays = {
    Dan: 4,
    Central: 5,
    Haifa: 6,
    Southern: 7
}

/* Main data of districts' packages on the way */
let status = {
    Dan:{
        title: "Dan",
        amount: 0,
        packages:{},
        sizes: [0,0,0],
        taxes: [0,0,0],
        icon: "location_city",

    },
    Central:{
        title: "Central",
        amount: 0,
        packages:{},
        sizes: [0,0,0],
        taxes: [0,0,0],
        icon: "location_city",
    },
    Haifa:{
        title: "Haifa",
        amount: 0,
        packages:{},
        sizes: [0,0,0],
        taxes: [0,0,0],
        icon: "location_city",
    },
    Southern:{
        title: "Southern",
        amount: 0,
        packages:{},
        sizes: [0,0,0],
        taxes: [0,0,0],
        icon: "location_city",

    }
}

/* Consuming the packages from the Kafka producer topic 'packages' and publishing them forward on the relevant channel */
const kafkaConsumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
    },{})
kafkaConsumer.connect()

kafkaConsumer.on('ready', () => {
    console.log('consumer ready...')
    kafkaConsumer.subscribe(['packages'])
    kafkaConsumer.consume()
}).on('data', async(data) => {
    const district = JSON.parse(data.value).District
    broker.publish(district, data.value)
    broker.HSET(JSON.parse(data.value).TrackID, district, data.value,(err, reply) => {
        if(err) console.error(err)
        // else console.log(`(REDIS:\t ${reply})`)
    })
})

/* This redis client manages the incoming messages of districts' channels, updating the status with the new data */
client.on('message', async(channel, message) => {
    const pack = JSON.parse(message)
    status[channel]['packages'][pack.TrackID] = pack
    ++status[channel]['sizes'][pack.Size - 1]
    ++status[channel]['taxes'][pack.Tax]
    ++status[channel]['amount']
    const delay = Math.floor(Math.random() * 5000 + (1000 * arrivalDelays[channel]))
    broker.PEXPIRE(pack.TrackID, delay,(err, reply) => {
        if(err) console.error(err)
    })
    console.log(`[+]${channel}: ${pack.TrackID} (delay: ${delay})`)
    console.log(`Number of pakages in ${channel}: ${status[channel].amount}`)
    home    // This call is refreshing the dashboard on new data
    
    setTimeout(() => {  // For each package, according to it's district, timing the semi-randomized arrival time
        delete status[channel]['packages'][pack.TrackID]
        --status[channel]['sizes'][pack.Size - 1]
        --status[channel]['taxes'][pack.Tax]
        --status[channel]['amount']
        broker.PSETEX('delivered_'+pack.TrackID, 20000, JSON.stringify(pack))
        console.log(`[-]${channel}: ${pack.TrackID}`)
        console.log(`Number of pakages in ${channel}: ${status[channel].amount}`)
        home

    }, delay)
})

/* Returns the number of packages, within the given district, of each size as an array: [<#small>, <#medium>, <#big>] */
const getSizes = (district) => {
    return status[district]['sizes']
}

/* Returns the number of packages, within the given district, of each tax stage as an array: [<#none>, <#vat>, <#full>] */
const getTaxes = (district) => {
    return status[district]['taxes']
}

/* Returns the average size within the given district */
const getSizeAvg = (district) => {
    var avg = 0, count = 0
    for(var i = 0; i < 3; ++i){
        avg += (i + 1) * (status[district]['sizes'][i])
        count += status[district]['sizes'][i]
    }
    return count == 0? 0 : avg /= count
}

/* Returns the average tax stage within the given district */
const getTaxAvg = (district) => {
    var avg = 0, count = 0
    for(var i = 0; i < 3; ++i){
        avg += i * (status[district]['taxes'][i])
        count += status[district]['taxes'][i]
    }
    
    return count == 0? 0 : avg /= count
}

/*Express - Rendering the main page - Dashboard */
const home = app.get('/', (req, res) => {
    res.render("pages/dashboard", {status})
})

/*Express - Rendering the charts page */
app.get('/charts', (req,res) => {
    res.render("pages/charts", {status})
})

/*Express - Rendering the analytics page */
app.get('/analytics', (req,res) => {
    res.render("pages/analytics", {status})
})



