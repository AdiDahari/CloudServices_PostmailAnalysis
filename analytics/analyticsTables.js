/**
 * This file is for processing information achieved from MongoDB Atlas database.
 * each document parsed and written in a CSV file - for BigML computation.
 * Additionally, this file handles the routing of the express server.
 * the router sends the relevant file for the view in the express server.
 */

const { MongoClient } = require("mongodb");
const path = require('path')
const fs = require('fs')
const express = require('express')

/* Csv Writer initialization */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'analytics/data/data.csv',
  header: [
    { id: 'items' }
  ]
});

/* Batch processing the data by time interval of 10 seconds */
async function main() {
  let sets = []
  const uri = "mongodb+srv://123:123@cluster0.ahl2h.mongodb.net/Ariel?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    var packages = client.db('Ariel').collection('Packages');
    (await packages.find({}).toArray()).forEach((value) => {
      items = []
      value.Items.forEach(e => {
        items.push(e.name)
      })
      sets.push({ items: items })
    })
    await fs.truncate(__dirname + '\\data\\data.csv', 0, () => {
    })
    await csvWriter.writeRecords(sets).then(() => {
    })

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

/* Routing handler - reads the result file made in BigML.js and sends it by the render() method to the analytics page */
const router = express.Router()
router.get('/analytics', async (req, res) => {
  var data = fs.readFileSync('analytics\\data\\result.json')
  res.render('pages/analytics', { fis: JSON.parse(data) })
})
module.exports = router

setInterval(main, 10000)