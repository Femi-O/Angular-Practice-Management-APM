import { RouterModule } from '@angular/router';
import { ConvertToSpacesPipe } from './converttospaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ConvertToSpacesPipe],
  imports: [
    RouterModule.forChild([            //we use forChild because forRoot is in the root module, AppModule. forRoot has already registered the service so forChild knows not to re-register the service.
      { path: 'products', component: ProductListComponent },

      { path: 'products/:id',
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent }, //collapsed this for clarity!
    ]),
    SharedModule
  ]
})
export class ProductModule { }
