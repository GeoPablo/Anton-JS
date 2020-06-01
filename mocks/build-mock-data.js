/**
 * File: build-mocks.js
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Friday, May 29th 2020, 4:29:54 pm
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Friday, 29th May 2020 5:46:34 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */

const fs = require('fs');
const Jimp = require('jimp');
const path = require('path');

const mockDataPath = './images-details.initial.json';
const outputDataPath = './images-details.json';

const res = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));

res.forEach((dataset) => {
  const imagePath = path.join(__dirname, dataset.imageName);

  Jimp.read(imagePath, function (err, image) {
    if (err) {
      console.log(err);
    }
    const imageHeight = image.getHeight();
    const imageWidth = image.getWidth();
    dataset['rgbaValues'] = {};

    const imageData = {
      //@ts-ignore
      data: [],
      height: imageHeight,
      width: imageWidth,
    };

    for (let i = 0; i < imageHeight; i++) {
      for (let j = 0; j < imageWidth; j++) {
        const pixelIndex = image.getPixelIndex(j, i) / 4;
        const pixel = Jimp.intToRGBA(image.getPixelColor(j, i));

        dataset['rgbaValues'][pixelIndex] = pixel;
        imageData.data.push(...Object.values(pixel));
      }
    }

    dataset['imageData'] = imageData;

    fs.writeFileSync(outputDataPath, JSON.stringify(res));
  });
});
