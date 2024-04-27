import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm !: FormGroup;
 
  constructor (private formBuilder:FormBuilder) {}
  ngOnInit () {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName:['', [Validators.maxLength(5), Validators.required]],
      email:['', [Validators.email, Validators.required]],
      password:['',[Validators.minLength(5), Validators.required]],
      confirmPwd:[''],
    },
    {
      validators:MustMatch('password',"confirmPwd") 
    }
  )
  }
  signup() {
    console.log("hi",this.signupForm.value);
  }

}
