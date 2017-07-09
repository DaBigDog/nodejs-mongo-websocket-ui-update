var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Product = require('../models/Product.js');

var eventName = 'productChange';


/* GET /products listing. */
router.get('/', function(req, res, next) {
  Product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


/* GET /products/id */
router.get('/:id', function(req, res, next) {
  Product.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/* POST /products */
router.post('/', function(req, res, next) {
console.log(req.body);
  Product.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
      broadcastChange(eventName, 'post', post);
  });
});

/* PUT /products/:id */
router.put('/:id', function(req, res, next) {
console.log(req.params.id);
  Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, post) {
    if (err) return next(err);
     // {new: true} -> returns updated entity
    res.json(post);
      global.broadcastChange(eventName, 'put', post);
  });
});

/* DELETE /products/:id */
router.delete('/:id', function(req, res, next) {

	Product.findByIdAndRemove(req.params.id, function(err, post){
		console.log(post);

		var isSuccess = true;
    		if (err) isSuccess = false; //return next(err);

	//	var resObject = { id:req.params.id, deleted: isSuccess, error: err }
    		res.json(post);
	    global.broadcastChange(eventName, 'delete', post);
  	});
});


module.exports = router;

