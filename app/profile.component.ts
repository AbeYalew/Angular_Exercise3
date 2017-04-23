import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
@Component({
  selector: 'app-profile',
  template: `
    <p>
      Student Profile
       <br/>
     {{id}}
   
    </p>
     
  `
})
export class ProfileComponent{
 private items;
 private id;
 private subscription: Subscription;
  constructor(private DBService: DbService,private activatedRoute: ActivatedRoute) {
        this.subscription = activatedRoute.params.subscribe(
        (param: any) => this.id = param['id']
    );
    this.items = this.DBService.getData();
    // constructor will be used once
    // this.onetimeId = activatedRoute.snapshot.params['id']
   }
   ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // ngOnInit() {
  //   this.items = this.DBService.getData();
  //   // this.id=this.items.id;
  // }
  // Read Route parameters from ActivateRoute
  // We will use Observable as wrapper to subscribe to param changes
  // private subscription: Subscription;
  // id: string;
  // onetimeId: string;

  // constructor(private activatedRoute: ActivatedRoute) {
  //   // params will return an Observable
  //   // we need it so we track changes in parameters as this code will be run once at constructor
  //   this.subscription = activatedRoute.params.subscribe(
  //       (param: any) => this.id = param['id']
  //   );
  //   // constructor will be used once
  //   this.onetimeId = activatedRoute.snapshot.params['id']
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
