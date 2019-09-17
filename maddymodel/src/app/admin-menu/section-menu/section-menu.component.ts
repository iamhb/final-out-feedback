import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders }from '@angular/common/http';
import { SubjectModel } from '../subject-menu/subjectmodel';
import { FacultyModel } from '../faculty-menu/facultymodel';
import { SectionModel } from './sectionmodel';


@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.css']
})
export class SectionMenuComponent implements OnInit {
depname: string= 'IT';
semValue='';
secValue='';
facValue=[];
index:number=1;
collectionvar='';


addSectionvar:boolean;
viewSectionvar:boolean;
deleteSectionvar:boolean;
setSectionvar:boolean;

allSubjects:SubjectModel[]=[];
allFaculty:FacultyModel[]=[];
allSectionDetails:SectionModel[]=[];


facultynamevar=[];

/*index = ['0', '1', '2', '3', '4', '5'];*/

  constructor(private http:HttpClient) { }

  ngOnInit() {
/*fetching faculty name*/
this.http.
        post("http://localhost:3000/api/get_facultyname",{params: {depValue: this.depname }}).
        subscribe(
          data  => {
          console.log(data);
         this.allFaculty=[];
          for (var key in data) {
                  console.log(data[key]);
                  this.allFaculty.push(data[key]);
          }
          console.log("in OnInit");
          console.log(this.allFaculty);
          },
          error  => {
          console.log("Error", error);
        });
        this.semValue='';
this.secValue='';

  }

 addSection(): void{
  		this.addSectionvar= true;
  		this.viewSectionvar= false;
   		this.deleteSectionvar= false;
      this.setSectionvar=false;
  }

  addSectiondb():void{
  	alert(this.semValue+this.secValue);
  	this.collectionvar= this.semValue+this.secValue;
this.http.post("http://localhost:3000/api/create_section",{params: {depValue: this.depname,sectionName :this.secValue, semesterName :this.semValue}}).
   subscribe(
          data  => {
            console.log("loaded successfully ");
          },
          error  => {
          console.log("Error", error);
        });

/*this.semValue='';
this.secValue='';*/
  }


  viewSection():void{
  	this.addSectionvar= false;
  		this.viewSectionvar= true;
   		this.deleteSectionvar= false;
        this.setSectionvar=false;
/*this.semValue='';
this.secValue='';*/

  }


viewSectionFaculty(){

if(this.semValue )
{
  if(this.secValue){
      
      this.http.post("http://localhost:3000/api/view_section_faulty",{params: {depValue: this.depname, secValue: this.secValue,

        semValue: this.semValue }}).
   subscribe(
          data  => {
            console.log("section details loaded successfully ");
            console.log(data);
            this.allSectionDetails=[];
            for (var key in data) {
                  console.log(data[key]);
                  this.allSectionDetails.push(data[key]);
                }
               console.log(this.allSectionDetails[0]); 
          },
          error  => {
          console.log("Error", error);
        });
 }
}

}






  setSection():void{
    this.addSectionvar= false;
      this.viewSectionvar= false;
      this.deleteSectionvar= false;
        this.setSectionvar=true;
  }

  getSubject(semValue):void{
    //alert(semValue);
    if(this.semValue){
    //alert(semValue);
    this.http.
        post("http://localhost:3000/api/get_subjectname",{params: {name: semValue, depValue: this.depname }}).
        subscribe(
          data  => {
          console.log("chats loaded successfully ");
          console.log(data);
         this.allSubjects=[];
          for (var key in data) {
                  console.log(data[key]);
                  this.allSubjects.push(data[key]);
          }
          console.log("subject details");
          console.log(this.allSubjects);
          },
          error  => {
          console.log("Error", error);
        });
}
  }
//in this method, faculty names are pushed to array sequentially according to subjects orders
    showFac(fac:string):void{
      if(fac)
      {
          console.log("hello"+ fac);
          this.facultynamevar.push(fac);
      }
  }

//passing facultyname aaray var, sec var, sem var to api
  setSectiondb():void{
if(this.semValue){
  if(this.secValue){
    //alert(this.facultynamevar[2]);
    console.log("semvalue:" +this.semValue + "sec value:" + this.secValue);
    console.log("in set secdb"+this.facultynamevar);

    this.http.
    post("http://localhost:3000/api/set_section_faculty",

      {params: {depValue: this.depname, facultyname :this.facultynamevar, secValue: this.secValue,

        semValue: this.semValue, subarray: this.allSubjects }}).

   subscribe(
          data  => {
            console.log("section details done successfully ");
          },
          error  => {
          console.log("Error", error);
        });
}
else alert(" Enter sec value");
}
else alert("Enter sem sec value");
  }


}
