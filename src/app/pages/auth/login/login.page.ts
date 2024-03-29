import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  emailValue!: string;
  passwordValue!: string;



  constructor(private formBuilder: FormBuilder,private authFire: AuthfirebaseService, private router: Router) { 

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit() {
  }

  async login() {
    try {
      await this.authFire.login(this.emailValue, this.passwordValue);
    } catch (error) {

    }
  }

  async register() {
    try {
      await this.authFire.register(this.emailValue, this.passwordValue);
    } catch (error) {

    }
  }

  async xd(){
    this.router.navigate(['resetpassword'])
  }

  async profe(){
    this.router.navigate(['homeprofesor'])
  }

}
