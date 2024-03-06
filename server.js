const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = process.env.PORT || 1337;
const app = express();
app.use(bodyParser.json());

const headers = {
    'access_token': 'jYJKNz24ooYz9DfQrOJ3BBWhsL_Gd9OnuJRQGFRPcZU49DKudlQkB91MqnhufgWkw5B4Cl-Rm5p6EvX8_CxSE-8XhI7LxhS0vW-h1jMZj12-GwWCbAdPDezQdaBbcSz8ytY2QFEMcN7BE_9Q-CQAHfDexaVunxOymHRkCkJ6gYZC4-89qRw5UzGUxMkuzu5gh1_-NxZoiMgI6Vz6ZigEDxKXn0M2_AbohJgtNPdHpLsy0zLajzcNSe8cqNcu-unEZ3Q8IfB5c52-2lnuXUcKJQu1_b_8wkP8t3kOCxVXsmEIB8CPX-h1088xtpFjvxG0X1Nj997TZpZu6yehoTgnNQ8I_qkl_Bz0XWYXH9F1yLQ64-z2hxAMQw9eva6Ni8joW476IEsPW3cBDUn8XDk8UBKXxsA6pOzcNvafGzsJpYy'
};
const options = {
    url: 'https://openapi.zalo.me/v2.0/oa/listrecentchat?data=%7B%22offset%22%3A0%2C%22count%22%3A5%7D',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log("body callback: ",body);
    }
}

app.post('/zalo', (req, res) => {
  console.log(req.body);
  res.json(req.body);
  request(options, callback);
}


const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port: ${port}`);
});