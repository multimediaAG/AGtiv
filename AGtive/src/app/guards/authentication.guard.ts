import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationGuard implements CanActivate {

  private isLoggedIn: boolean = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log("Logged in: " +this.authenticationService.loggedIn);

      if(this.authenticationService.loggedIn) {
        return true;
      }
      this.router.navigate(["/login"]);

    return false;
  }
  
}
