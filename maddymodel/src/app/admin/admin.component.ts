import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [Department]
})
export class AdminComponent implements OnInit {
  
  constructor(private router: Router, private department: Department) { }

  ngOnInit() {
  }

  
  depvalue(depname: string)
  {
 
    //this.department.setDepartment(depname);
    alert("hello: "+ depname);
    //alert("from dep fun: "+ this.department.getDepartment());

    //this.department.depvalue= depname;
    /*//console.log("depvalue:" + this.department.depvalue);
    this.department.setDepartment();

    this.assignvar= this.department.depvalue;
    console.log("assigndew value:" + this.assignvar);*/
    //console.log( this.department.getDepartment() );*/
    
    this.router.navigate(['/adminmenu']);
  }
}
