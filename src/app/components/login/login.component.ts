import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm !: FormGroup;
 
  constructor (private fb:FormBuilder) {}
  ngOnInit () {
    this.loginForm = this.fb.group({
      
      email:['', [Validators.email, Validators.required]],
      password:['',[Validators.minLength(5), Validators.required]],
      
    })
  }
  login() {
    console.log("hi",this.loginForm.value);
  }
}
