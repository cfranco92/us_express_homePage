amazon = require('amazon-affiliate-api');

var client = amazon.createClient({
    awsTag: process.env.AWS_TAG,
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET
  });

  client.itemSearch({
    director: 'Quentin Tarantino',
    actor: 'Samuel L. Jackson',
    searchIndex: 'DVD',
    audienceRating: 'R',
    responseGroup: 'ItemAttributes,Offers,Images'
  }).then(function(results){
    console.log(results);
  }).catch(function(err){
    console.log(err);
  });