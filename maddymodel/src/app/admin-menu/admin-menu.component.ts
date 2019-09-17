import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../department.service';


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css'],
    providers: [Department]
})

export class AdminMenuComponent implements OnInit {
  depname: string= 'IT';
  
	adminmod: AdminMenuComponent;
  constructor(private router: Router,private department: Department) { }
 

  ngOnInit() {}
  


    toSubjectMenu()
    { 
    	//alert("Subject Senu");
    	this.router.navigate(['/adminmenu/subject']); 
    }

    toFacultyMenu()
    {
      //alert("Faculty Menu");
      this.router.navigate(['/adminmenu/faculty']);
    }

    toReportMenu()
    {
      //alert("Faculty Menu");
      this.router.navigate(['/adminmenu/report']);
    }
    toSectionMenu()
    {
      //alert("Faculty Menu");
      this.router.navigate(['/adminmenu/section']);

    }


}
