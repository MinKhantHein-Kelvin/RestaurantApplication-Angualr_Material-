import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
// import { RestaurantData } from '../restaurant-data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  showSpinner = true;
  restaurant: any;
  id: any;
  showform: boolean;

  editForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    types: new FormControl('', [Validators.required]),
  });

  constructor(
    private resService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.resService.getDetails(this.id).subscribe((data) => {
      this.restaurant = data;
      if (data) {
        this.showSpinner = false;
      }
    });
  }

  showEdit() {
    this.showform = !this.showform;
  }

  editRestaurant() {
    if (this.editForm.valid) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.resService
        .editRestaurant(this.editForm.value, this.id)
        .subscribe((data: any) => {
          if (data.length === 0) {
            console.log('Null Value');
          } else {
            this.editForm.reset();
            this.router.navigate(['restaurant']);
            this.openUpdateSnackBar();
          }
        });
    }
  }

  deleteRestaurant() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.resService.deleteRestaurant(this.id).subscribe((data) => {
      if (data.length === 0) {
        console.log('Null Value');
      } else {
        this.router.navigate(['restaurant']);
        this.openDeleteSnackBar();
      }
    });
  }

  openDeleteSnackBar() {
    this._snackBar.open('Restaurant Deleted Successful!', 'closed', {
      duration: 5 * 1000,
    });
  }
  openUpdateSnackBar() {
    this._snackBar.open('Restaurant Updated Successful!', 'closed', {
      duration: 5 * 1000,
    });
  }
}
