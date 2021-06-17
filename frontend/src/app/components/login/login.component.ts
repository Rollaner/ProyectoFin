import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required], //chequear validar email
      pass:['', Validators.required]
    });
   }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.loginForm.value); //enviar formulario a servicio de log-in sanitizar de ser necesario
  }
}
