var express = require('express');
var router = express.Router();
var News = require('../controllers/newsController');
var Rabbits = require('../controllers/rabbitController')
var testlist = new Array();
//#########################
//GET METHODS FOR APP, PRIORITIZED
//#########################
//grab news from last 30 days and send 
router.get('/news', function(req,res){
	News.query(function(err, news){
		if(err){
			res.send(err);
		}
			res.send(news);
	})

});
router.get('/rabbits', function(req, res){
	res.send('nope');
})

//##############################
//POST METHODS AND GET METHODS FOR ADMIN PAGE
//##############################
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
//routes for admin page
router.get('/admin', function(req,res){res.render('admin');})
router.get('/newsEdit', function(req,res){res.render('newsEdit')});
router.get('/rabbitsEdit', function(req,res){res.render('rabbitsEdit')});
//save news from last 30 days
router.post('/news', function(req,res){
	News.create({message:req.body.message}, function(err, data){
		if(err){
			res.send(err.message);
		}
		res.send("success, press back");
	})	
});
//save rabbit Age, Name, Description in DB, on callback get 
//_id and save images under that with _1,_2,_3 appended
router.post('/rabbits', function(req,res){
	var dbData = {age:req.body.age, name:req.body.name,
		description:req.body.description};
	console.log(req.body.age);
})
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

router.post('/carrots', function(req, res){
	testlist.push(req.body);
})
router.get('/carrots', function(req,res){
	res.send(testlist);
})


module.exports = router;
