import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  message: any;
  messageClass: any;
  regForm = new FormGroup({
    username : new FormControl('',Validators.compose([Validators.required, Validators.maxLength(25)])),
    email : new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password : new FormControl('',Validators.compose([Validators.required, Validators.minLength(6)])),
  });

  get Username() {
    return this.regForm.get('username');
  }

  get Email() {
    return this.regForm.get('email');
  }

  get Password() {
    return this.regForm.get('password');
  }

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {

  }

  register(){
    if(this.regForm.valid){
      this.userService.register(this.regForm.value).subscribe(data=>{

        if (!data.success) {
          this.messageClass = 'alert alert-warning';
          this.message = data.message;
        }
        else{
          this.regForm.reset();
        this.router.navigate(['/user/login']);
        }
      })
    }
  }

}
