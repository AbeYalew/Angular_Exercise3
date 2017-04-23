import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-students',
   template: `
    <p>
      LIST OF STUDENTS.
       <br/>
       <a [routerLink]="['students']">Parent-Child</a> |
       <a [routerLink]="['profile',id]">Student with Id 1</a> 
      
      <br/>
         <router-outlet></router-outlet>
    
    </p>
     
  `,
  styles: []
})
export class StudentsComponent implements OnInit {
 private items;
 private id;
  constructor(private DBService: DbService) { }
 
//  <ul>
//             <li *ngFor="let item of items">{{item.id}}</li>
//         </ul>
  ngOnInit() {
    this.items = this.DBService.getData();
    this.id=this.items.id;
  }

}
