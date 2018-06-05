var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseHidden = require('mongoose-hidden')() ;


var minlength = [8,'The value of "{PATH}" ("{VALUE}") is shorter than the minimum required than the minimum required length ({minlength})'];
var minlength = [10,'The value of "{PATH}" ("{VALUE}") is shorter than the minimum required than the minimum required length ({minlength})'];
var password_length = []
var UserSchema = new Schema({
  username: {
    type: String,
    minlength:minlength,
    required:[true, 'Enter a minimum of 3 characters'],
  },
  email:{
  message : 'The email should be unique',
  type:String,
  required:true,
  },
  password: {
   type: String,
   minlength:password_length,
   hide : true, 
  }
  });

UserSchema.plugin(mongooseHidden);
module.exports = mongoose.model('User', UserSchema,'users');