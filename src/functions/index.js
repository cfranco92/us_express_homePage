const functions = require('firebase-functions');
const express = require('express');

const puppeteer = require('puppeteer');
const $ = require('cheerio');

const app = express();
// app.get('/timestamp', (request, response) => {
//   // response.send(`${Date.now()}`);  
//   response.send(request);
// });

app.post('/timestamp', (req, res) => {
  let url= req.body.link;
  // res.send(url);

  puppeteer
  .launch()
  .then( (browser) =>{
    return browser.newPage();
    
  })  
  .then((page) => {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then((html) =>{	
    let name = $('#productTitle', html).text();    
    let price = $('#priceblock_ourprice', html).text();
    let urlPhoto = $('#landingImage', html).attr('src');
    console.log(name);
    console.log(price);
    console.log(urlPhoto);
    let product = {
      "nombre": name,
      "precio": price,
      "url": urlPhoto
    }
    return res.send(product);
  })
  .catch(function(err) {
	  //handle error
	  console.error(err);
  });
});

exports.app = functions.https.onRequest(app);