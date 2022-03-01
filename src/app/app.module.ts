import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './Products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Default and wild card routes below here //
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: ' ', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
        // Feature modules below here //
    ProductModule
  ],
  bootstrap: [AppComponent]
  // bootstrap simply means starting component
})
export class AppModule { }
