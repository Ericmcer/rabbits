var express = require('express');
var router = express.Router();
var News = require('../controllers/newsController');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
//routes for admin page
router.get('/admin', function(req,res){res.render('admin');})
router.get('/newsEdit', function(req,res){res.render('newsEdit')})
//grab news from last 30 days and send 
router.get('/news', function(req,res){
	News.query(function(err, news){
		if(err){
			res.send(err);
		}
			res.send(news);
	})

});
//save news from last 30 days
router.post('/news', function(req,res){
	News.create({message:req.body.message}, function(err, data){
		if(err){
			res.send(err.message);
		}
		res.send("success, press back");
	})	
});

//delete news from certain date
router.post('/newsDelete', function(req,res){
	console.log(req.body.date)
	News.delete({date:req.body.date}, function(err,data){
		if(err){
			console.log(err);
		}else{
			console.log(data);
		}
	})
})
module.exports = router;
