// /**
//  * File: build-image-urls.js
//  * Project: antonjs
//  * Version:0.0.1
//  * Created Date: Friday, May 29th 2020, 11:22:50 pm
//  * Author: Georgian Stan (georgian.stan8@gmail.com)
//  * -----
//  * Last Modified: Saturday, 30th May 2020 12:54:03 am
//  * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
//  * ------------------------------------
//  */

// const fetch = require('node-fetch');
// const fs = require('fs');
// const path = require('path');

// const outputFilePath = path.join(__dirname, 'image-urls.cozyness.json');

// const buildUrlList = () => {
//   const urls = [];

//   const howManyImages = 800;
//   let currentImageNr = 0;

//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < howManyImages; i += 50) {
//       // * debounce
//       setTimeout(async () => {
//         const res = await fetch(
//           `https://api.cozyness.ro/api/user/images-feed?skip=${i}&limit=${50}`,
//         );

//         const json = await res.json();
//         json.forEach((e) => {
//           urls.push(e.image.optimized[0]);
//         });
//         currentImageNr += 50;

//         if (currentImageNr === howManyImages) {
//           resolve(urls);
//         }
//       }, 200);
//     }
//   });
// };

// buildUrlList().then((urls) => {
//   fs.writeFileSync(outputFilePath, JSON.stringify(Array.from(new Set(urls))));
// });
