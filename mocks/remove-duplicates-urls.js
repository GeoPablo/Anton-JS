/**
 * File: remove-duplicates-urls.js
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Saturday, May 30th 2020, 12:00:52 am
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Saturday, 30th May 2020 12:03:04 am
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const outputFilePath = path.join(__dirname, 'image-urls.json');

const data = JSON.parse(fs.readFileSync(outputFilePath, 'utf8'));

const unique = Array.from(new Set(data));
console.log(data.length);
console.log(unique.length);

fs.writeFileSync(outputFilePath, JSON.stringify(unique));
