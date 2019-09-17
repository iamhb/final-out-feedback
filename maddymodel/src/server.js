const express =require('express');
const app =express();
const mongoose=require('mongoose');
const body=require('body-parser');
const cros=require('cors');
var async = require("async");
var assert =require('assert');

var Subjectobj = require('./models/SubjectSchema.js');
var Facultyobj = require('./models/FacultySchema.js');
var Sectionobj = require('./models/SectionSchema.js');

app.use(body.json());

var crosobj = {
    orign:"http://localhost:4200",
    optionSucessStatus:200
}
app.use(cros(crosobj));


app.listen(3000,() =>{
console.log("server listening the port 3000");
});


app.post("/api/get_subjectname", (req, res)=>{
    //checking the value from angular 27-30
    console.log("in get-subject api"+req.body.params.depValue);
  	console.log("semvalue:"+req.body.params.name);
  	console.log(req.body);
    //assinging sem and dep value to variables
	  var dbname= req.body.params.depValue;
	  var semValue= req.body.params.name; //sem value 
    //connecting to db
    var db = mongoose.connect('mongodb://localhost:27017/'+dbname ,{ useNewUrlParser: true });
    /* 1st {}  similiar to where condition,
     2nd {} selecting required fields to show,
      3rd{} for sorting- "1" for ascending "-1" for descending*/
    Subjectobj.find({sem: semValue },
              {_id:0, subcode: 1, subname: 1 },
              {sort:{subname: 1 } },
      function (err, docs) {
                  	if(err)
                        {
                            res.status(500).json(err);
                        }
                    else if(docs)
                        {
                            console.log(docs);
                            res.status(200).json(docs);
                        }
        });
 });



app.post("/api/get_facultyname", (req, res)=>{
   
   var dbname= req.body.params.depValue;
   console.log("dep name:" + dbname);

    var db = mongoose.connect('mongodb://localhost:27017/'+dbname ,{ useNewUrlParser: true });
    /* 1st {}  similiar to where condition,
     2nd {} selecting required fields to show,
      3rd{} for sorting- "1" for ascending "-1" for descending*/
    Facultyobj.find( {},
      {_id:0, name: 1 },
     {sort:{name: 1 }},
   
     function (err, docs) {
                    if(err)
                        {
                            res.status(500).json(err);
                        }
                    else if(docs)
                        {
                            console.log(docs);
                            res.status(200).json(docs);
                        }
        });
 });


app.post("/api/add_facultyname", (req, res)=>{
   
   var dbname= req.body.params.depValue;
   console.log("dep name:" + dbname);
    var db = mongoose.connect('mongodb://localhost:27017/'+dbname ,{ useNewUrlParser: true });
    /* 1st {}  similiar to where condition,
     2nd {} selecting required fields to show,
      3rd{} for sorting- "1" for ascending "-1" for descending*/
    
    var Faculty =new Facultyobj();
    Faculty.name=req.body.params.facultyname;
    console.log(Faculty.name);
    Faculty.save((err)=>{
      res.send(Faculty);
      console.log("ADDED");
    }); 
 });



app.post("/api/add_subjectname", (req, res)=>{
   
   var dbname= req.body.params.depValue;
   var subname= req.body.params.subname;
   var subcode= req.body.params.subcode;
   var semValue= req.body.params.sem;
   console.log("dep name:" + dbname + subname + subcode+ semValue);

    var db = mongoose.connect('mongodb://localhost:27017/'+dbname ,{ useNewUrlParser: true });
    /*1st {}  similiar to where condition,
      2nd {} selecting required fields to show,
      3rd{} for sorting- "1" for ascending "-1" for descending*/
    var subject =new Subjectobj();
    subject.subname=req.body.params.subname;
    subject.subcode=req.body.params.subcode;
    subject.sem=req.body.params.sem;

    subject.save((err)=>{
      res.send(subject);
      console.log("subject ADDED");
    });
 });


app.post("/api/del_facultyname", (req, res)=>{

   
   var dbname= req.body.params.depValue;
   console.log("dep name:" + dbname);

    var db = mongoose.connect('mongodb://localhost:27017/'+dbname ,{ useNewUrlParser: true });
    /* 1st {}  similiar to where condition,
     2nd {} selecting required fields to show,
      3rd{} for sorting- "1" for ascending "-1" for descending*/
      var Faculty = new Facultyobj();
      console.log(req.body.params.facultyname);

      Facultyobj.remove( { "name": req.body.params.facultyname },function (err, docs) {
                    if(err)
                        {
                            res.status(500).json(err);
                        }
                    else if(docs)
                        {
                            console.log(docs);
                            res.status(200).json(docs);
                        }
      });
 });
 
 /*=====to create collection dynamically=====
app.post("/api/create_section", (req, res)=>{

var dbname= req.body.params.depValue;
  var db = mongoose.connect('mongodb://localhost:27017/'+dbname ,{ useNewUrlParser: true })

  console.log(req.body.params.collectionName);
 var temp=req.body.params.collectionName;

  const collection =mongoose.model(temp,{
   name:String
  });

  var infoboj= new collection();  
   infoboj.name=req.body.params.collectionName;
   console.log(infoboj.name);

    infoboj.save((err)=>{
    
        res.send(infoboj);
        console.log("ADDED");
   });
});
*/

app.post("/api/create_section", (req, res)=>{

var dbname= req.body.params.depValue;
var sectionName=req.body.params.sectionName;
var semesterName=req.body.params.semesterName;


var db = mongoose.connect('mongodb://localhost:27017/'+dbname ,{useNewUrlParser: true });
var Section = new Sectionobj();
Section.sem=semesterName;
Section.sectionname=sectionName;

Section.save((err)=>{
      res.send(Section);
      console.log("section created");
    }); 

console.log(dbname+sectionName+semesterName);
});




app.post("/api/set_section_faculty", (req, res)=>{
   
   console.log("in set section faculty");
   var dbname= req.body.params.depValue;
   var secValue=req.body.params.secValue;
   var semValue=req.body.params.semValue;
   var facultyname=req.body.params.facultyname;

   var subarray=req.body.params.subarray;
      //subarray consist of subname and subcode
   var subarrayLength=subarray.length;

   console.log("dep name: " + dbname);
   console.log("facultyname: "+ facultyname);
   console.log("sem: "+ semValue);
   console.log("sec: "+ secValue);
   console.log(subarray);

   var db = mongoose.connect('mongodb://localhost:27017/'+dbname ,{ useNewUrlParser: true });

for (i = 0; i < subarray.length; i++)
{

  console.log("==========");
  console.log(subarray[i].subname);
  console.log(subarray[i].subcode);
  console.log(facultyname[i]);

  var Section = new Sectionobj();
  Section.sem=semValue;
  Section.sectionname=secValue;

  Section.subname=subarray[i].subname;
  console.log(Section.subname);

  Section.subcode=subarray[i].subcode;
  console.log(Section.subcode);

  Section.facultyname=facultyname[i];
  console.log(Section.facultyname);

      Section.save((err)=>{
      console.log( "ADDED-"+Section.facultyname);
    }); 
}

 });


app.post("/api/view_section_faulty", (req, res)=>{

console.log("in view section faculty");
   var dbname= req.body.params.depValue;
   var secValue=req.body.params.secValue;
   var semValue=req.body.params.semValue;

   console.log("dep name: " + dbname);
   console.log("sem: "+ semValue);
   console.log("sec: "+ secValue);

   var db = mongoose.connect('mongodb://localhost:27017/'+dbname ,{ useNewUrlParser: true });
   //var Section = new Sectionobj();
    /* 1st {}  similiar to where condition,
     2nd {} selecting required fields to show,
      3rd{} for sorting- "1" for ascending "-1" for descending*/
    Sectionobj.find({sem: semValue, sectionname: secValue },
              {_id:0, subcode: 1, subname: 1, facultyname: 1 },
              {sort:{subname: 1 } },
      function (err, docs) {
                    if(err)
                        {
                            res.status(500).json(err);
                        }
                    else if(docs)
                        {
                            console.log(docs);
                            res.status(200).json(docs);
                        }
        });
});