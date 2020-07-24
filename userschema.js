
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var blogSchema = new Schema({ 
    Index_No: Number,
    Name:  String,
    Email: String,
    Contact_No: Number,
    date_created: { type: Date, default: Date.now },
    list: {type: Number, default:[]}
    Budget: Number
  });
  var Blog = mongoose.model('User Data', blogSchema);

  module.exports=Blog;// i need this page in data

 
