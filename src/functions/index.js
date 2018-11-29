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
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    let name = $('#productTitle', html).text();    
    let price = $('#priceblock_ourprice', html).text();
    let urlPhoto = $('#landingImage', html).attr('src');
    console.log(name);
    console.log(price);
    console.log(urlPhoto);
    var product = {
      "nombre": name,
      "precio": price,
      "url": urlPhoto
    }  
    await browser.close();
    return res.send(product);
  })();  
});



exports.app = functions.https.onRequest(app);