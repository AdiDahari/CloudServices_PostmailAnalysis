/**
 * This is the main server app of express. it handles the ongoing trackable Packages.
 * it updates the dashboard and the charts pages.
 */

const express = require("express");
const SocketIO = require('socket.io')
const app = express();
const server = express().use(app).listen(3000, () => {
    console.log(`Listening Socket on http://localhost:3000`);

})
/* SocketIO connection */
const io = SocketIO(server)
io.on('connection', (socket) => {
    socket.on('update', (msg) => {
        console.log(msg)
        io.emit(msg)
    })
})
const Kafka = require('node-rdkafka');
const broker = require('redis').createClient()
const client = broker.duplicate()
app.use(express.static('public'))
app.set('view engine', 'ejs')
const analytics = require('./analytics/analyticsTables')
/* Subscribing to each district's channel - redis subscription */
client.subscribe(['Dan', 'Central', 'Haifa', 'Southern'])

/* Each district assigned with relevant arrival delay (as realistic as possible) */
const arrivalDelays = {
    Dan: 4,
    Central: 5,
    Haifa: 6,
    Southern: 7
}
/* Returns the average size within the given district */
const getSizeAvg = (sizes) => {
    var avg = 0, count = 0
    for (var i = 0; i < 3; ++i) {
        avg += (i + 1) * (sizes[i])
        count += sizes[i]
    }
    if (count == 0) return 'None'
    switch (Math.round(avg /= count)) {
        case 1: return 'Small'
        case 2: return 'Medium'
        case 3: return 'Big'
    }
}

/* Returns the average tax stage within the given district */
const getTaxAvg = (taxes) => {
    var avg = 0, count = 0
    for (var i = 0; i < 3; ++i) {
        avg += i * (taxes[i])
        count += taxes[i]
    }

    if (count == 0) return 'None'
    switch (Math.round(avg /= count)) {
        case 0: return 'Free'
        case 1: return 'VAT'
        case 2: return 'Full'
    }
}

/* Main data of districts' packages on the way */
let status = {
    Dan: {
        title: "Dan",
        amount: 0,
        packages: {},
        sizes: [0, 0, 0],
        taxes: [0, 0, 0],
        icon: "data:image/png;base64,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",

    },
    Central: {
        title: "Central",
        amount: 0,
        packages: {},
        sizes: [0, 0, 0],
        taxes: [0, 0, 0],
        icon: "https://iconarchive.com/download/i91135/icons8/windows-8/Maps-Center-Direction.ico",
    },
    Haifa: {
        title: "Haifa",
        amount: 0,
        packages: {},
        sizes: [0, 0, 0],
        taxes: [0, 0, 0],
        icon: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/kdtgyhomynylyrymhk1k",
    },
    Southern: {
        title: "Southern",
        amount: 0,
        packages: {},
        sizes: [0, 0, 0],
        taxes: [0, 0, 0],
        icon: "https://icons.iconarchive.com/icons/icons8/ios7/256/Maps-South-Direction-icon.png",

    }
}

/* Consuming the packages from the Kafka producer topic 'packages' and publishing them forward on the relevant channel */
const kafkaConsumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {})
kafkaConsumer.connect()

kafkaConsumer.on('ready', () => {
    console.log('Hot Connection is Ready!')
    kafkaConsumer.subscribe(['packages'])
    kafkaConsumer.consume()
}).on('data', async (data) => {
    const district = JSON.parse(data.value).District
    broker.publish(district, data.value)
    broker.HSET(JSON.parse(data.value).TrackID, district, data.value, (err, reply) => {
        if (err) console.error(err)
    })
})

/* This redis client manages the incoming messages of districts' channels, updating the status with the new data */
client.on('message', async (channel, message) => {
    const pack = JSON.parse(message)
    status[channel]['packages'][pack.TrackID] = pack
    ++status[channel]['sizes'][pack.Size - 1]
    ++status[channel]['taxes'][pack.Tax]
    ++status[channel]['amount']
    const delay = Math.floor(Math.random() * 5000 + (1000 * arrivalDelays[channel]))
    broker.PEXPIRE(pack.TrackID, delay, (err, reply) => {
        if (err) console.error(err)
    })
    io.emit('update', status[channel])
    console.log(`[+]\t${channel}: id: ${pack.TrackID}, size: ${pack.Size}, tax: ${pack.Tax}`)
    home    // This call is refreshing the dashboard on new data
    charts
    setTimeout(() => {  // For each package, according to it's district, timing the semi-randomized arrival time
        delete status[channel]['packages'][pack.TrackID]
        --status[channel]['sizes'][pack.Size - 1]
        --status[channel]['taxes'][pack.Tax]
        --status[channel]['amount']
        broker.PSETEX('delivered_' + pack.TrackID, 40000, JSON.stringify(pack))
        console.log(`[-]\t${channel}: ${pack.TrackID}`)
        io.emit('update', status[channel])
        home
        charts
    }, delay)
})




/*Express - Rendering the main page - Dashboard */
const home = app.get('/', (req, res) => {
    res.render("pages/dashboard", { status })
})

/*Express - Rendering the charts page */
const charts = app.get('/charts', (req, res) => {
    res.render("pages/charts", { status, getSizeAvg, getTaxAvg })
})

/*Express - Rendering the analytics page */
app.get('/analytics', analytics)



