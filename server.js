const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1337;
const app = express();
app.use(bodyParser.json());



app.post('/zalo', (req, res) => {
  console.log(req.body);
  res.json(req.body);
  const response = await fetch('https://openapi.zalo.me/v2.0/oa/listrecentchat?data=%7B%22offset%22%3A0%2C%22count%22%3A5%7D', 
  {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "access_token": "m18IU9c9ModB4Xnzd8bJBSuT7tYPaIjLbbymUu6q5MgRNYPTrffeVSLBNspskdT__4bvMVQDDNJnJJ9YeguIT_jAE571YWXXoMj6TEsEPbVZGK1avgrqJ_5L9d34XZPFoc4PUfcaDqkQO0qQjOW7AP967mZ6fIyWaLyZ3eAaFo7QSWq2_vec0lWCQbFom6zJnGPdK97sN0QPEqWwalfGBv09UI6gdZSMkGXz0OtuRo3P8tmoqFD4EFOeNXR4taL4nICFSFpYGd_I2d1MrvfTOS81K4hno7jEnHXRHPFKQcom64T5e_PfHeSRGH2YY7P3g6DSVgtsLd6OO5nBYf5x7Az0V1EZWM87ZXekC9xX8pp9EXyovi4I4hK63o6P_1Kqini1QOA8C6w3IJbgqRGNV_ic1cvXOA9_PPIUNYu",
    },
    body: JSON.stringify(data), 
  return response.json();
});
  console.log("KMG", response);
}


const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port: ${port}`);
});