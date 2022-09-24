import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AllRestaurantComponent } from './all-restaurant/all-restaurant.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  { path: '', component: AllRestaurantComponent },
  {
    path: 'add-restaurant',
    component: AddRestaurantComponent,
    canActivate : [AuthGuard]
  },
  { path: ':id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
