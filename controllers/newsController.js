var mongoose = require('mongoose');
var News = require('../models/news');

exports.create = function(params, cb) {
	var news = new News(params);
	news.save(function(err, news) {
		if (err) {
			return cb({code:400, message:err});
		} else {
			return cb(null, news);
		}
	});
};
exports.query = function(cb){
	News.find().exec(function(err, news){
		if(err){
			return cb({code:400, message:err})
		}else{
			return cb(null, news);
		}
	})
}
exports.delete = function(params, cb){
	News.remove(params).exec(function(err,response){
		if(err){
			return cb({code:400, message:err})
		} else{
			return cb(null, response);
		}

	})
}

var oneMonth = 86400 * 30;
exports.getLastThirtyDays = function(cb) {
	var oneMonthAgo = Date.now() - oneMonth;
	News.find({"date":{"$gt":oneMonthAgo}}).exec(function(err, news) {
		if (err) {
			return cb({code:400, message:err});
		} else {
			return cb(null, news);
		}
	});
};