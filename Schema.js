var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({ 
  Index: {type : Number, default : 0},
  Name: String,
  Brand: String,
  Category: String,
  Count: Number,
  Price: Number,
  Description: String,
  Rating:{type: Number, default : (0,5)},
  Reviews: {type: String, default: []}
});
var Blog = mongoose.model('User Data', blogSchema);

module.exports=Blog;
