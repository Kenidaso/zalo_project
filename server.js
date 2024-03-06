const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = process.env.PORT || 1337;
const app = express();
app.use(bodyParser.json());

const headers = {
    'access_token': 'FzLD22cEONKqrKCDB8vfSJ7QG0WfbZmaHSLv52UIAIzdarm-VxCSA3QYLbahymv6ODbwOYNwJKv1sWrI0l9HTHlcFWe6jbmqI9TtA02K9XbVfqbW9w4BJcsdTN5mbLbY6e0vH7YwL7GJg0flTVifGGpyMqCNpJKdLVnt6qZwBWWkoKvmBE8z57BsP2GKs2euVVrf4Xdr5WHkubCU5-CTP7xlM6e4tpDXIlCPGLRREduu_rbjPSaKJplPQ5Dx_JDxFEK4LbNDUqq0uJHH7C1dQ4lR61KKttKbUCKc52EJSGvycJmq6yXGEGpeFLrfkbqa38ujFcgsUmTol0i46h591NcZPHqGepLXKwTg7Whe12v0qbCoLubz63QJE3DlYKKU69uHRcM6GaCJWWupLDXbCnpb3HTKKIzY6aaacMHo'
};
const options = {
    url: 'https://openapi.zalo.me/v2.0/oa/listrecentchat?data=%7B%22offset%22%3A0%2C%22count%22%3A5%7D',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log("body callback yeu anh K: ",body);
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