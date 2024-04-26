import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      confirmPwd:[''],
    })
  }
  signup() {
    console.log("hi",this.signupForm.value);
  }

}
