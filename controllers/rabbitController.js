var mongoose = require('mongoose');
var Rabbits = require('../models/rabbits');



exports.create = function(params, cb) {
	var rabbits = new Rabbits(params);
	rabbits.save(function(err, rabbits) {
		if (err) {
			return cb({code:400, message:err});
		} else {
			return cb(null, rabbits);
		}
	});
};
exports.query = function(cb){
	Rabbits.find().exec(function(err, rabbits){
		if(err){
			return cb({code:400, message:err})
		}else{
			return cb(null, rabbits);
		}
	})
}
exports.delete = function(params, cb){
	Rabbits.remove(params).exec(function(err,response){
		if(err){
			return cb({code:400, message:err})
		} else{
			return cb(null, response);
		}

	})
}