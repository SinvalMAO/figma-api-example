const request = require("request");
const secret = require('../secret');
const fs = require('fs');

const FILE_ID = 'yedwifXR5dKOI6cKeDzLNn';

const options = { method: 'GET',
  url: 'https://api.figma.com/v1/files/' + FILE_ID,
  headers: {
    'X-Figma-Token': secret["X-Figma-Token"]
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);

  const jsonString = JSON.stringify(JSON.parse(response.body));

  const options = { encoding: 'utf8' };
  const path = './models/onUiKit.json';

  fs.writeFile(path, jsonString, options, err => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });

});
