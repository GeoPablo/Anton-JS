const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Use connect method to connect to the server
MongoClient.connect(url, async function (err, client) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  const collection = db.collection('users');

  //   const res = await collection.find({}).toArray();
  //   console.log(res);
  const values = [98, 50, 82];
  const res = await collection
    .aggregate([
      {
        $project: {
          diff: {
            $sum: [
              {
                $abs: {
                  $subtract: [values[0], { $arrayElemAt: ['$value', 0] }],
                },
              },
              {
                $abs: {
                  $subtract: [values[1], { $arrayElemAt: ['$value', 1] }],
                },
              },
              {
                $abs: {
                  $subtract: [values[2], { $arrayElemAt: ['$value', 2] }],
                },
              },
            ],
          },
          doc: '$$ROOT.value',
        },
      },
      { $sort: { diff: 1 } },
    ])
    .toArray();

  console.log(res);
});
