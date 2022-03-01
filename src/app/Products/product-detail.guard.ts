import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor (private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = Number(route.paramMap.get('id')); //meaning in the ActivatedRouteSnapshot's snapshot 'paramMap', get the id which is a number
      if (isNaN(id) || id < 1) {
        alert('Invalid product id'); //in a real app, here, we'll route to an error page.
        this.router.navigate(['/products']); //activating a route with code
        return false;
      }
    return true;
  }

}
