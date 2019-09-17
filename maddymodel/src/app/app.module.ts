import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; 

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FdbkpageComponent } from './fdbkpage/fdbkpage.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
          /*----------ADMIN MENU CHILD COMPONENTS----------*/
import { FacultyMenuComponent } from './admin-menu/faculty-menu/faculty-menu.component';
import { SubjectMenuComponent } from './admin-menu/subject-menu/subject-menu.component';
import { SectionMenuComponent } from './admin-menu/section-menu/section-menu.component';
import { ReportMenuComponent } from './admin-menu/report-menu/report-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FdbkpageComponent,
    LoginComponent,
    AdminComponent,
    AdminMenuComponent,
      FacultyMenuComponent,
      SubjectMenuComponent,
      SectionMenuComponent,
      ReportMenuComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
