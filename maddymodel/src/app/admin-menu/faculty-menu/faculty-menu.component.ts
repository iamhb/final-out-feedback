import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders }from '@angular/common/http';
import { FacultyModel } from './facultymodel';
@Component({
  selector: 'app-faculty-menu',
  templateUrl: './faculty-menu.component.html',
  styleUrls: ['./faculty-menu.component.css']
})

export class FacultyMenuComponent implements OnInit {

   depname: string= 'IT';
	facultyname='';
  delfacultynamevar='';
   addFacultyvar= false;
   viewFacultyvar= false;
   deleteFacultyvar= false;
   
   allFaculty:FacultyModel[]=[];
   addFacultyname:string= '';

   
  constructor(private http:HttpClient) { }

  ngOnInit() {

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
          console.log(this.allFaculty[0]);
          },
          error  => {
          console.log("Error", error);
        });
  }

  addFaculty(): void{
  		this.addFacultyvar= true;
  		this.viewFacultyvar= false;
   		this.deleteFacultyvar= false;
  }

/*addFacultydb(facultyname: string){
  		 alert(facultyname);
  }
*/
  viewFaculty(): void{
  		this.viewFacultyvar= true;
  		this.addFacultyvar= false;
		this.deleteFacultyvar= false;
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
          console.log(this.allFaculty[0]);
          },
          error  => {
          console.log("Error", error);
        });
  }

  deleteFaculty(): void{
  		this.deleteFacultyvar= true;
  		this.viewFacultyvar= false;
  		this.addFacultyvar= false;
  }

  addFacultydb(addFacultyname: string){

    //alert("it comess"+this.allFaculty.name);
   this.http.post("http://localhost:3000/api/add_facultyname",{params: {depValue: this.depname,facultyname :addFacultyname}}).
   subscribe(
          data  => {
            console.log("loaded successfully ");
            alert(this.depname+this.facultyname);
          },
          error  => {
          console.log("Error", error);
        });
  }

deletefac(){
  alert(this.delfacultynamevar);

  this.http.post("http://localhost:3000/api/del_facultyname",{params: {depValue: this.depname,facultyname :this.delfacultynamevar}}).
   subscribe(
          data  => {
            console.log("deleted successfully ");
            //alert(this.depname+this.facultyname);
          },
          error  => {
          console.log("Error", error);
        });




}




}
