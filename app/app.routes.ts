import { RouterModule, Routes } from "@angular/router";

// import { HomeComponent } from "./home.component";
// import { AboutusComponent } from "./aboutus.component";
// import { RouteComponent } from "./params/route.component";
// import { QueryComponent } from "./params/query.component";
// import { FragmentComponent } from "./params/fragment.component";
// import { PreserveComponent } from "./params/preserve.component";
// import { ParentComponent } from "./parentchild/parent.component";
// import { ChildComponent } from "./parentchild/child.component";
// import { GuardsComponent } from "./guards/guards.component";
import {StudentsComponent} from "./students.component";
import {HomepageComponent} from "./homepage.component";
import {ProfileComponent} from "./profile.component";

// import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
// import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";

const MY_ROUTES: Routes = [
     { path: '', component: HomepageComponent },
     { path: 'students', component: StudentsComponent },
    //  { path: 'aboutus', component: AboutusComponent },
     // A redirect route requires a pathMatch property to tell the router how to match a URL to the path of a route.
     // The default matching strategy of Angular router is
     // to match the redirect route when the URL begins with the redirect route's prefix path.
     // if 'prefix' all params/routes/xx will be redirected to homepage
    //  { path: 'params/route', redirectTo: '/', pathMatch: 'full' },
    //  { path: 'profile/:id', component: ProfileComponent },
    //  { path: 'profile', component: ProfileComponent },
    //  { path: 'params/query', component: QueryComponent },
    //  { path: 'params/fragment', component: FragmentComponent },
    //  { path: 'params/preserve', component: PreserveComponent },
    //  { path: 'parentchild/parent', component: ParentComponent },
     { path: 'students', component: StudentsComponent, children: [
         { path: 'profile/:id', component: ProfileComponent }
     ] },
     // guards need to be initilized, add them to module!
     // canActivate when surfing to route
     // canDeactivate when surfing away from route
    // { path: 'guards', component: GuardsComponent, canActivate:[MyCanActivateGuard], canDeactivate: [MyCanDeactivateGuard] },
     // ** for all routes that we don't recognize, 
     // Routes served from top to bottom so this should always come last!
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
