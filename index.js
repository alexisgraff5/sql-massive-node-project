var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://postgres@localhost/massive_project";

var massiveInstance = massive.connectSync({connectionString : connectionString});


app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);

var db = app.get('db');
var controller = require('./productsCtrl');

app.post('/api/product', controller.create);
app.get('/api/product/:id', controller.getOne);
app.get('/api/products', controller.getAll);
app.put('/api/product/:id', controller.update);
app.delete('/api/product/:id', controller.delete);


app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});
