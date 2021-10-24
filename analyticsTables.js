const { MongoClient } = require("mongodb");
const fi = require('frequent-itemset')
const path = require('path')
const express = require('express')
let fis = []


async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb+srv://123:123@cluster0.ahl2h.mongodb.net/Ariel?retryWrites=true&w=majority";

  fis = []
  let support = 0.1
  let sets = []
  const client = new MongoClient(uri);
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    // await  listDatabases(client);
    var packages = client.db('Ariel').collection('Packages');
    (await packages.find({}).toArray()).forEach((value) => {
      items = []
      value.Items.forEach(e => {
        items.push(e.name)
      })
      sets.push(items)
    })
    // console.log(sets, '\n\nSupport:\t0.5')
    fi(sets, support, true).forEach(set => {
      console.log(set)
      set.sort()
      let support_count = 0;
      sets.forEach(s => {
        s.sort()
        if (hasSubArray(s, set)) {
          ++support_count
        }
      })
      // console.log(set, `.\tSupport Count:\t${support_count}`)
      fis.push({ set: set, support: support, supportCount: support_count })
    })

    
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client) {
  docList = await client.db('Ariel').collection('Packages');

  console.log("docs:");
  docList.find('*').forEach(element => {
    console.log(element)
  });
};

function hasSubArray(master, sub) {
  return sub.every((i => v => i = master.indexOf(v, i) + 1)(0));
}

const router = express.Router()
router.get('/analytics', async(req, res) => {
  await main()
  console.log(fis)
  res.render('pages/analytics', {fis})
})
module.exports = router