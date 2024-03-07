require('dotenv').config();
let request = require('request');

let headers = {
    'Content-Type': 'application/json',
    'access_token': process.env.access_token,
};
let user_id = '8189000477219660231';
let user_name = 'Trung Kiên';
let contentMess = {
    "recipient": {
        "user_id": user_id,
    }, 
    "message": {
        "text": "hello" + user_name + "with" + user_id
    }
};
// let dataString: JSON.stringtify(contentMess);
let options = {
    url: 'https://openapi.zalo.me/v3.0/oa/message/cs',
    method: 'POST',
    headers: headers,
    body: JSON.stringify(contentMess)
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    }
}

request(options, callback);