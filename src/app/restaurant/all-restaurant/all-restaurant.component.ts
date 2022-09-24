import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-all-restaurant',
  templateUrl: './all-restaurant.component.html',
  styleUrls: ['./all-restaurant.component.css']
})
export class AllRestaurantComponent implements OnInit {
  allRestaurentData: any;

  constructor( private resService : RestaurantService) { }

  ngOnInit(): void {
    this.resService.getAllData().subscribe(data=>{
      this.allRestaurentData = data;
      console.log(this.allRestaurentData);
    })
  }

}
