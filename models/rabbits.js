var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rabbitSchema = new Schema({
	age:String,
	name:String,
	description:String,
	numberImages:Number
})

var Rabbits = mongoose.model('Rabbits', rabbitSchema);
module.exports = Rabbits;