import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from './products.interface';

@Component({
  // Remember the selector is only used for nesting within another component.
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'
  product: Iproduct | undefined;
  // make ActivatedRoute a dependency (shit this needs to work) so it can give Angular the state of the route link (its instance is then injected 'constructor(HERE)'.
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  // since the parameter won't change while this component is displayed, use the snapshot approach.
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    // use backticks `` to display the template string (: ${id}) to append the id to the pageTitle
    this.pageTitle +=`: ${id}`;
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    };
  }
onBack (): void {
  this.router.navigate(['/products']);
}
}
