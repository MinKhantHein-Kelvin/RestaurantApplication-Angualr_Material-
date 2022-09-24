import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { AllRestaurantComponent } from './all-restaurant/all-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AllRestaurantComponent,
    AddRestaurantComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class RestaurantModule { }