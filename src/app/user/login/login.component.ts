import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  messageClass: string;
  message: any;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(6)])
    ),
  });

  get Email() {
    return this.loginForm.get('email');
  }

  get Password() {
    return this.loginForm.get('password');
  }

  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {}
  login() {
    this.userService.Login(this.loginForm.value).subscribe((data) => {
      if (!data.success) {
        this.messageClass = 'alert alert-warning';
        this.message = data.message;
      } else {
        localStorage.setItem('token', data.token);
        this.loginForm.reset();
        this.router.navigate(['/restaurant']);
      }
    });
  }
}
