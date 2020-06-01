/**
 * File: build-image-urls.js
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Friday, May 29th 2020, 11:22:50 pm
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Friday, 29th May 2020 11:55:14 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const loremPicsumUrl = 'https://picsum.photos/200/300';
const outputFilePath = path.join(__dirname, 'image-urls.json');

const buildUrlList = () => {
  const urls = [];

  const howManyImages = 1000;
  let currentImageNr = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < howManyImages; i++) {
      // * debounce
      setTimeout(async () => {
        const res = await fetch(loremPicsumUrl);
        urls.push(res.url);
        currentImageNr++;
        console.log(currentImageNr);

        if (currentImageNr === howManyImages) {
          resolve(urls);
        }
      }, 200);
    }
  });
};

buildUrlList().then((urls) => {
  fs.writeFileSync(outputFilePath, JSON.stringify(urls));
});
