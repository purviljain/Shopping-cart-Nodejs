var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping');
var db = mongoose.connection;

var products = [
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic game',
    description: 'Awesome Game',
    price: 10
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Second game',
    description: 'Awesome Game!!',
    price: 15
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Best game',
    description: 'Awesome Game!!!',
    price: 50
  })
];

var done=0;
for(var i=0; i<products.length; i++)
{
  products[i].save(function(err, result){
    done++;
    if(done === products.length) {
      exit();
    }
  });
}
function exit(){
  mongoose.disconnect();
}
