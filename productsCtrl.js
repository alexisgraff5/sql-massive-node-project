var app = require('./index');
var db = app.get('db');

module.exports = {

  create: function(req, res, next) {
    db.create_product([], function(err, product) {
      console.log(err, product);
    });
  },

  getOne: function(req, res, next) {
    db.read_product();
  },

  getAll: function(req, res, next) {
    db.read_products();
  },

  update: function(req, res, next) {
    db.update_product();
  },

  delete:function(req, res, next) {
    db.delete_product();
  }

};
