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
/*Sends all rabbit data*/
router.get('/rabbits', function(req, res){
	Rabbits.query(function(err,rabbits){
		if(err){
			res.send(err);
		}
			res.send(rabbits);
	})
})

router.get('/christine', function(req,res){
	res.render('christine');
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
/*Rabbit storage, each rabbit stored by name with # of images*/
router.post('/rabbitsEdit', function(req,res){
	
	/*variables for DB create*/
	var timeLeft = new Date().getTime() + req.body.time * 86400000;
	var dbData = {age:req.body.age, name:req.body.name,
		description:req.body.description, time:timeLeft,
		numberImages:req.body.numberImages} 
	//check for duplicate name
	Rabbits.checkUnique(req.body.name, function(err,rabbits){
		if(err){
			console.log(err);
		}else{
			if(rabbits.name === req.body.name){
				res.send('Duplicate Rabbit names found')
			}
			//no duplicate, create new rabbit entry
			Rabbits.create(dbData, function(err, success){
				if(err){
					res.send('DB Error' + JSON.stringify(err));
				}else{
					//do nothing
				}
			});
		}
	});
})

router.post('/rabbitsEdit/image', function(req, res){
	console.log(req.files);
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




module.exports = router;
