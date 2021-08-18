const request = require("request");
const secret = require('./secret');

var options = { method: 'GET',
  url: 'https://api.figma.com/v1/files/yedwifXR5dKOI6cKeDzLNn',
  headers: 
   {'X-Figma-Token': secret["X-Figma-Token"] }
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(response);

})
