const connection = require("./connection.js");

var orm = {

  selectAll: function(callback) {
    connection.query("SELECT * FROM tacos", function (err, response) {
      if (err) throw err;
      callback(response);
    });

  },

  insertOne: function(taco_name, callback){
    connection.query("INSERT INTO tacos SET ?", {
      taco_name: taco_name,
      cooked: false,
    }, function (err, response) {
      if (err) throw err;
      callback(response);
    });
  },

  updateOne: function(tacoID, callback){
    connection.query("UPDATE tacos SET ? WHERE ?",
     [{cooked: true}, {id: tacoID}], 
     function (err, response) {
        if (err) throw err;
        callback(response);
      });
  }
  
  //delete: function(burgerID, callback){
    //connection.query("DELETE FROM burgers SET ? WHERE ?", [{devoured: false}, {id: burgerID}], function (err, response) {
      // if (err) {
        // throw err;
        //}
       //callback(response);
     //});
    //}
  }; 

module.exports = orm;
