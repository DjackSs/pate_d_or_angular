
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { LoginService } from './services/login.service';
import { inject } from '@angular/core';


const isConnected: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => 
    {
        const loginService: LoginService = inject(LoginService);
        const router: Router = inject(Router);

        if(!loginService.isAuthenticated()) router.navigateByUrl("");

        return loginService.isAuthenticated();
        
    }


export const routes: Routes = 
[
    {
        path: "",
        loadComponent: ()=> import('./components/login-form/login-form.component').then(f => f.LoginFormComponent)
    },
    {
        path: "restaurants",
        canActivate: [isConnected],
        loadComponent: ()=> import('./components/restaurant-list/restaurant-list.component').then(f => f.RestaurantListComponent)
    }
        
];
