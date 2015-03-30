var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rabbitSchema = new Schema({
	age:{
		type:String
		},
	name:{
		type:String,
		unique: true
		},
	description:{
		type:String
		},
	time: {
		type:Number
		},
	numberImages:{
		type:Number
	}	
})

var Rabbits = mongoose.model('Rabbits', rabbitSchema);
module.exports = Rabbits;