import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template:`
  <nav class="navbar navbar-expand navbar-light bg-light">
  <a class="navbar-brand" routerLink ='/welcome'>{{pageTitle}}</a>
  <ul class="nav nav-pills">
    <li><a class="nav-link" routerLink ='/welcome'>Home</a></li>
    <li><a class="nav-link" routerLink ='/dashboard'>Dashboard</a></li>
    <li><a class="nav-link" routerLink ='/products'>Product List</a></li>
    <li><a class="nav-link" routerLink ='/notes'>Notes</a></li>
  </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent {
  pageTitle: string = "Femi's Page";
}
// The pm (product management) prefix is used to identify it as something in the application.
