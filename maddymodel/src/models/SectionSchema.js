var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SectionSchema = new Schema({
   sectionname: String,
   sem:String,
   subname: String,
   subcode: String,
   facultyname: String
});

module.exports = mongoose.model('sectiondetails', SectionSchema);   