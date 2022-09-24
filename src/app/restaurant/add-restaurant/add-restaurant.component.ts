import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent implements OnInit {
  restaurantForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', ),
    mobile: new FormControl('', ),
    address: new FormControl('', [Validators.required]),
    types: new FormControl('', [Validators.required]),
  });

  constructor(private resService: RestaurantService, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  addRestaurant(){
    if(this.restaurantForm.valid){
      this.resService.addRestaurant(this.restaurantForm.value).subscribe(data=>{
        console.log(data);
        this.restaurantForm.reset();
        this.router.navigate(['/restaurant']);
        this.openSnackBar();
      })
    }
  }

  openSnackBar() {
    this._snackBar.open('Restaurant Added Successful!','closed',{
      duration: 5 * 1000
    });
  }
}
