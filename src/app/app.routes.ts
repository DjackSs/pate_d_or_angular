
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';

/*
const isConnected: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => 
    {
        //inject() est une fonction statique pour permettre de s'injecter un service

        
        const loginService: LogginService = inject(LogginService);
        const router: Router = inject(Router);

        if(!loginService.isloged) router.navigateByUrl("loggin");

        
        return loginService.isloged;
        
    }
*/

export const routes: Routes = 
[
    {
        path: "restaurants",
        //canActivate: [isConnected],
        loadComponent: ()=> import('./component/restaurant-list/restaurant-list.component').then(f => f.RestaurantListComponent)
    },
    { path: 'login', component: LoginFormComponent }
        
];
