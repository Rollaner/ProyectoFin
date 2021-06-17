import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', Validators.required], //chequear validar email
      email2: ['', Validators.required],
      pass:['', Validators.required],
      pass2:['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signupForm.value); //cerciorarse que email 1 == email 2, idem con pass
  }

}
