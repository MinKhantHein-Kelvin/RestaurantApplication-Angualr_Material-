import { RestaurantData } from './../restaurant-data';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { map, Observable, startWith } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-restaurant',
  templateUrl: './all-restaurant.component.html',
  styleUrls: ['./all-restaurant.component.css']
})
export class AllRestaurantComponent implements OnInit {
  showSpinner = true;

  originalData: RestaurantData[];
  allRestaurentData : Observable<RestaurantData[]>

  obj = new FormControl('');
  frmGroup: FormGroup;

  constructor(private resService : RestaurantService, private fb: FormBuilder) {
    this.frmGroup = fb.group({
      obj: [],
    });
  }

  ngOnInit(): void {
    // this.listings$ = this.listingService.getListings();
    this.resService.getAllData().subscribe((data: RestaurantData[]) => {
      if(data){
        this.showSpinner = false;
      }
      this.originalData = data;
      if (this.originalData && this.originalData.length > 0) {
        this.allRestaurentData = this.frmGroup.get('obj')!.valueChanges.pipe(
          startWith(''),
          map((text) => this.search(text, this.originalData))
        );
      }
    });
  }
  search(text: string, listings: RestaurantData[]): any {
    return listings.filter((listing: RestaurantData) => {
      const term = text.toLowerCase();
      return listing.name && listing.name.toLowerCase().includes(term) ||  listing.address && listing.address.toLowerCase().includes(term)
    });

  }

}
