/*
Documentation.js does not allow for customization of markdown output,
so we need this script just to add the title line to the API documentation ¯\_(ツ)_/¯
*/
const fs = require('fs');

const temp = fs.createReadStream('api/temp.md');
const final = fs.createWriteStream('api/API.md');
/*
node.js doesnt have a prependFile method on fs,
so we need to create a new file with just the title line
and then append the rest of the API document to the new file ¯\_(ツ)_/¯wtf¯\_(ツ)_/¯
*/
final.write('# API for Alogrithms and Data Structures\n\n', () => {
  temp.on('data', (chunk) => {
    fs.appendFileSync('api/API.md', chunk);
  });
});
// delete temp file :D
temp.on('end', () => {
  fs.unlinkSync('api/temp.md');
});
