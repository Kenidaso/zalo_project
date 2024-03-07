require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = process.env.PORT || 1337;
const app = express();
app.use(bodyParser.json());

const headers = {
    'access_token': process.env.access_token,
};
const options = {
    url: 'https://openapi.zalo.me/v2.0/oa/listrecentchat?data=%7B%22offset%22%3A0%2C%22count%22%3A1%7D',
    headers: headers
};


app.post('/zalo', (req, res) => {
  console.log(req.body);
  let latestMessends = request(options, readDataMess);
  // console.log("list tin nhan: ",latestMessends);
  res.json(req.body);
  let reqToZalo = request(optionsReq, function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body + response.statusCode);
    }
  });
  // console.log("day la req to zalo 3: ", reqToZalo);
})

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port: ${port}`);
});

//3
let user_id = '8189000477219660231';
let user_name = 'Trung Kiên';
let contentMess = {
    "recipient": {
        "user_id": user_id,
    }, 
    "message": {
        "text": "200" + 
    }
};
let optionsReq = {
    url: 'https://openapi.zalo.me/v3.0/oa/message/cs',
    method: 'POST',
    headers: headers,
    body: JSON.stringify(contentMess)
};

function readDataMess(error, response, body) {
    if (!error && response.statusCode == 200) {
        // console.log("body readDataMess: ",body);
        return body;
    }
}