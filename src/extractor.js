const json = require('../response.json');
const fs = require('fs');

// console.log(Object.keys(json.document.children[1].name));
console.log(json.document);

// const jsonStr = JSON.stringify(json.document.children);



// fs.writeFile('./designSystemChildren.json', jsonStr, options, err => {
//     if (err) {
//         console.log('Error writing file', err);
//     } else {
//         console.log('Successfully wrote file');
//     }
// });
