import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

    username: String='';
    showPassword:boolean=false;
    clgcode:String;
    depcode:String;
    joinyear:String;

    passwordvalue:String='';

  ngOnInit() {
  }

  doAdminCheck(){
  //console.log(event);
  //alert(this.username);
    if(this.username == 'admin')
    {
      this.showPassword=true;
      if(this.passwordvalue == 'admin')
          {
            //alert("welcome admin");
            this.router.navigate(['/admin']);
          }
    }
   else if(this.username.substring(0,4) == "8204")
      {
        this.clgcode= this.username.substring(0,4);
        this.joinyear= this.username.substring(4,6);
        this.depcode= this.username.substring(6,9);

        this.router.navigate(['/fdbkpage'], { queryParams: {name: this.username} } );

         //this.router.navigate(["/","chat",], { queryParams:data});
      }
    else
    {
      alert("Invalid User");
    }

    //alert("clgcode:" + this.username.substring(0,4));
    //alert("joinyear:" + this.username.substring(4,6));
    //alert("depcode:" + this.username.substring(6,9));
  }

}
