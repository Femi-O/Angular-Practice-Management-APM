import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './Products/product.module';
import { DashboardModule } from './dashboard/dashboard.module';
// import { DashboardComponent } from './dashboard/dashboard.component';   THIS IMPORT SHOULDN'T BE HERE BUT IN DASHBOARD MODULE

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    // DashboardComponent   THIS CHILD SHOULDN'T BE HERE BUT IN DASHBOARD MODULE
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Default and wild card routes below here //
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: ' ', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      // { path: 'dashboard', component: DashboardComponent},   THIS PATH SHOULD NOT BE HERE BUT IN DASHBOARD MODULE
    ]),
        // Feature modules below here //
    ProductModule,
    DashboardModule
  ],
  bootstrap: [AppComponent]
  // bootstrap simply means starting component
})
export class AppModule { }
