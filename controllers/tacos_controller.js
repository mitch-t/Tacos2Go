const express = require("express");
const router = express.Router();

const taco = require("../models/taco.js");

// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// render all tacos
router.get('/index', function (req, res) {
  taco.selectAll(function(data) {
    var tacoObj = { tacos: data };
    console.log(tacoObj);
    res.render('index', tacoObj);
  });
});

// Create a New Taco
router.post('/taco/create', function (req, res) {
  taco.insertOne(req.body.taco_name, function() {
    res.redirect('/index');
  });
});

// Devour a taco or update
router.post('/taco/eat/:id', function (req, res) {
  taco.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});

//Delete a taco
router.delete('/taco/eat/:id', function (req, res) {
  taco.delete(req.params.id, function() {
    res.redirect('/index');
  });
});


module.exports = router;  
  