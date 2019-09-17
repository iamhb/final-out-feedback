import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms'; 
import{ActivatedRoute}from '@angular/router';


import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fdbkpage',
  templateUrl: './fdbkpage.component.html',
  styleUrls: ['./fdbkpage.component.css']
})
export class FdbkpageComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
  	 console.log("attu"+ this.route.snapshot.queryParams.name);
  	// console.log (this.route[queryParams['index']]);

  }

male='';
  username=this.route.snapshot.queryParams.name;
  clgcode= this.username.substring(0,4);
  joinyear= this.username.substring(4,6);
  depcode= this.username.substring(6,9);


               subjects=[
                  {name:'Physics',marks:70},
                  {name:'Chemistry',marks:80},
                  {name:'Math',marks:65},
                  {name:'English',marks:75},
                  {name:'Hindi',marks:67}
               ];

questions = ["Teachers Punctuality:  a) The best you have never seen  b) Just up to your  expectations c) Below expectations d) Not Punctual ",
			 "Was the lecture audible: a) Audible        b)Less audible   c)Difficult to hear           d)Not audible ",
				  "How far did your teacher use English for teaching ? : a)Only English         b)Mixing English & Tamil   c)Rarely used English            d)No English at all ",
				   "Did your teacher maintain eye contact with the students while teaching? :  a) Always         b) Sometimes   c) Rarely            d) Never ", 
				   "How well did the teacher prepare for class? : a) Thoroughly         b) Satisfactorily   c) Partially            d) Poorly ",
				    "Did the teacher write and draw legibly on black board : ?  a) Very well      b) Fairly well   c) Poor            d) Not at all",
						"Did the teacher cover all the points with appropriate illustrations? :  a) All points         b) Most of the points   c) Some points        d) None " ,
						 "How useful were the lectures in helping you understand the subject? : a) Very useful         b) Fairly useful   c) Less useful            d)Not useful " ,
						  "Did your teacher clearly explain the purpose of learning the topic? : a) Always         b) Sometimes   c) Rarely            d) Never " ,
						  "Was the oppurtunity for asking questions? : a) Plenty         b) Some   c) Not enough            d) No " ,
						  "Did your teacher solve your queries/difficulties on time? : a) Always solved promptly         b) Sometimes solved promptlyc) Solved but not promptly            d) Never solved " ,
						  "Your teacher is clear and intelligible in his explanations? : a) Strongly Agree         b) Agree   c) Disagree            d)Strongly Disagree ",
						  "Was the teacher : a) Strict         b) Friendly   c) Indifferent            d) Rude ",
						  "Did your teacher maintain perfect discipine in the class room? : a) Always         b) Sometimes   c) Rarely            d) Never",
						  "Did our teacher make the subject/learning interesting : ?a) Very Interesting         b) Interesting   c) Dry            dBoring ",
						  "Did your teacher motivate the student to study :  a) Always         b) Sometimes   c) Rarely            d) Never",
						  "Did your teacher inspire or make you work hard for better results? : a) Always         b) Sometimes   c) Rarely            d) Never",
						  "Did you think your interction with your teacher will contribute to yourdevelopment/growth in future? : a) Surely         b) Maybe   c) I do not know           d) No",
						  "Do you wish to learn from the same teacher in futures? : a) Surely         b) Not neccessary   c) I shall think            d)Never ",
						  "How do you feel about your teacher? :  a) I respect him         b) I admire him   c) Nothing specialabout him/her            d) I do not like his/her "




						  ];
male=[];

}

