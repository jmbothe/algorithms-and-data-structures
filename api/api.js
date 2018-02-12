/*
Documentation.js does not allow for customization of markdown output,
so we need this script just to add the title line to the API documentation ¯\_(ツ)_/¯
*/
const fs = require('fs');

const apiFile = fs.createWriteStream('api/API.md');

apiFile.write('# API for Alogrithms and Data Structures\n\n', () => {
  process.stdin.on('data', (chunk) => {
    apiFile.write(chunk);
  });
});
