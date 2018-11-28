const functions = require('firebase-functions');
const express = require('express');

const app = express();
// app.get('/timestamp', (request, response) => {
//   // response.send(`${Date.now()}`);  
//   response.send(request);
// });

app.post('/timestamp', (req, res) => {
  res.send(req.body);
});

exports.app = functions.https.onRequest(app);