import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable({ providedIn:'root'})
export class AuthGuard implements CanActivate{

    constructor(

        private router: Router,
        private loginService: LoginService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        const currentUser = this.loginService.currentUserValue;
        
        if(currentUser){
            
            console.log("Utilisateur connecte");
            console.log(currentUser);
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }


}