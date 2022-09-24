import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRestaurantComponent } from './restaurant/all-restaurant/all-restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurant', pathMatch: 'full' },
  {
    path: 'restaurant',
    loadChildren: () =>
      import('./restaurant/restaurant.module').then(
        (mod) => mod.RestaurantModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then(
        (mod) => mod.UserModule
      ),
  },
  { path: '**', pathMatch: 'full', component: AllRestaurantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
