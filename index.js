var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://postgres@localhost/massive_project";
var controller = require('./productCtrl.js');
var massiveInstance = massive.connectSync({connectionString : connectionString});

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);

var db = app.get('db');

app.post('/api/product', controller.create);
// use params
app.get('/api/product/:productId', controller.getOne);
app.get('api/products', controller.getAll);
// use query ?desc= and params
app.put('/api/product/:productId', controller.update);
//use params
app.delete('/api/product/:productId', controller.delete);


app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});
