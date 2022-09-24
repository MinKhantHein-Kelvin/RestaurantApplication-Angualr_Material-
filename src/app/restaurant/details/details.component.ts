import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { RestaurantData } from '../restaurant-data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  restaurant : any;
  id : any;

  constructor(private resService : RestaurantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.resService.getDetails(this.id).subscribe(data=>{
      this.restaurant = data;
      console.log(this.restaurant);

    })
  }

}
