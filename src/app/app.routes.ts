import { Routes } from '@angular/router';

export const routes: Routes = [
    //******* Chemin d'accès à la liste des restaurants ***************************************** */
    {
      path: 'restaurant-list',
      canActivate: [isConnected],
      // Charge dynamiquement le composant HelloWorldComponent lors de la navigation vers ce chemin
      loadComponent: () =>
        import('./components/restaurant-list/restaurant-list.component').then(
          (f) => f.RestaurantListComponent
        ),
    },
        //*******  ***************************************** */
];
