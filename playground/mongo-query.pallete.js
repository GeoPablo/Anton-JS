/**
 * File: mongo-query copy.js
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Monday, June 1st 2020, 6:07:08 pm
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Monday, 1st June 2020 6:21:49 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */

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

  const collection = db.collection('pallete');

  //   const res = await collection.find({}).toArray();
  //   console.log(res);
  const values = [
    [60, 60, 60],
    [70, 70, 70],
  ];
  const res = await collection
    .aggregate([
      {
        $project: {
          _id: 0,
          doc: '$$ROOT',
          diff: {
            $sum: [
              {
                $abs: {
                  $subtract: [
                    values[0][0],
                    { $arrayElemAt: [{ $arrayElemAt: ['$values', 0] }, 0] },
                  ],
                },
              },
              {
                $abs: {
                  $subtract: [
                    values[0][1],
                    { $arrayElemAt: [{ $arrayElemAt: ['$values', 0] }, 1] },
                  ],
                },
              },
              {
                $abs: {
                  $subtract: [
                    values[0][2],
                    { $arrayElemAt: [{ $arrayElemAt: ['$values', 0] }, 2] },
                  ],
                },
              },
              {
                $abs: {
                  $subtract: [
                    values[1][0],
                    { $arrayElemAt: [{ $arrayElemAt: ['$values', 1] }, 0] },
                  ],
                },
              },
              {
                $abs: {
                  $subtract: [
                    values[1][1],
                    { $arrayElemAt: [{ $arrayElemAt: ['$values', 1] }, 1] },
                  ],
                },
              },
              {
                $abs: {
                  $subtract: [
                    values[1][2],
                    { $arrayElemAt: [{ $arrayElemAt: ['$values', 1] }, 2] },
                  ],
                },
              },
            ],
          },
        },
      },
      { $sort: { diff: 1 } },
    ])
    .toArray();

  console.log(res);
});
