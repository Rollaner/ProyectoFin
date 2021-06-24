import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submit: boolean = false;
  constructor(private fb:FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', Validators.required], //chequear validar email
      email2: ['', Validators.required],
      pass:['', Validators.required, Validators.minLength(8)],
      pass2:['', Validators.required, Validators.minLength(8)]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signupForm.value); //cerciorarse que email 1 == email 2, idem con pass
    this.submit = true;
  }

  err(){
    if(this.signupForm.invalid && this.submit)
      return true;
    return false;  
  }
  /* if(this.signupForm.value.email!=this.signupForm.value.email2){
      this.signupForm.invalid
    }
    if(this.signupForm.value.pass!=this.signupForm.value.pass2){
      this.signupForm.invalid
    } */
}
