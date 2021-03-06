var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  cash:{
    type:Number
  },
  portfolio:{
    type:Array
  }
})

/*
userSchema.statics.addToWatchList = function(stock){
  this.portfolio.push(stock);
  return this
}*/


//now you can say User.get on any point on the controller. 
//.methods works on instances
//.statics works on models
//http://mongoosejs.com/docs/guide.html

//When called on controller, call User.get

module.exports = mongoose.model('User', userSchema);
