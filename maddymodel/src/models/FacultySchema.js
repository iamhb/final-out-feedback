var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FacultySchema = new Schema({
   name:String
});

module.exports = mongoose.model('facultynames', FacultySchema);   