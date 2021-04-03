// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

var taco = {

  selectAll: function(callback){
    orm.selectAll(function(response){
      callback(response);
    });
  },

  insertOne: function(taco_name, callback){
    orm.insertOne(taco_name, function(response){
      callback(response);
    });
  },

  updateOne: function(taco_id, callback){
    orm.updateOne(taco_id, function(response){
      callback(response);
    });
  },

  delete: function(taco_id, callback) {
    orm.delete(taco_id, function(response) {
      callback(response);
    });
  }
};


module.exports = taco;