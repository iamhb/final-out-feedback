var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubjectSchema = new Schema({
   subname:String,
   subcode:String,
   sem:String
});

module.exports = mongoose.model('subjectdetails', SubjectSchema);   