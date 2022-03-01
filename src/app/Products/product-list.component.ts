import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductService } from "./product.services";
import { Iproduct } from "./products.interface";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
// src/app/Products/product-list.component.html is the normal link but since they're in the same folder the "src/app/Products" changes to a '.'
export class ProductListComponent implements OnInit, OnDestroy {
  // by convention, this first section is essentially the css and the next would be the js/ts
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    sub!: Subscription;

    // listFilter: string = 'cart'; (I'm replacing this with a getter and setter so the filter works)
    private _listFilter: string = ' ';
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      console.log('In setter: ', value);
      this.filteredProducts = this.performFilter(value);
    }
    filteredProducts: Iproduct[] =[];
    products: Iproduct[] = [];

constructor(private productService: ProductService){} //where productService is a var

// by convention, this next section now is the typescript section
performFilter(filterBy: string): Iproduct[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product: Iproduct) =>
  product.productName.toLocaleLowerCase().includes(filterBy));
}

toggleImage(): void {
  this.showImage = !this.showImage;
} 
ngOnInit(): void {
  this.sub = this.productService.getProducts().subscribe({
    next: products => {
      this.products = products;
      this.filteredProducts = this.products;
    },
    error: err => this.errorMessage = err 
  });
  // this.listFilter = 'cart';     this was only added to make the filter start form cart.
}

ngOnDestroy(): void {
    this.sub.unsubscribe();
}

onRatingClicked (message:string): void{
  this.pageTitle = 'Product List: ' + message;
}
};

