const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1337;
const app = express();
app.use(bodyParser.json());



app.post('/zalo', (req, res) => {
  console.log(req.body.sender);
  res.json(req.body);
});

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port: ${port}`);
});