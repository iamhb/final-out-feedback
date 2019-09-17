import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FdbkpageComponent } from './fdbkpage/fdbkpage.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

import { FacultyMenuComponent } from './admin-menu/faculty-menu/faculty-menu.component';
import { SubjectMenuComponent } from './admin-menu/subject-menu/subject-menu.component';
import { SectionMenuComponent } from './admin-menu/section-menu/section-menu.component';
import { ReportMenuComponent } from './admin-menu/report-menu/report-menu.component';


const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'fdbkpage', component:FdbkpageComponent },
  { path:'admin', component:AdminComponent },
  { path:'adminmenu', component: AdminMenuComponent, children: [
			{ path: 'subject', component: SubjectMenuComponent },
			{ path: 'faculty', component: FacultyMenuComponent },
			{ path: 'report', component: ReportMenuComponent },
			{ path: 'section', component: SectionMenuComponent },
	]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
