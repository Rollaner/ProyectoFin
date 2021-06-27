import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  display:boolean = false;
  constructor(private fb:FormBuilder,private servicioUsuarios: UserService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      pass:['']
    },{validators: [Validators.required]});
   }

  ngOnInit(): void {
  }
  onSubmit() {
    this.servicioUsuarios.getLogin(this.loginForm.get('email').value.toString(),this.loginForm.get('pass').value.toString(),)
    if(this.servicioUsuarios.isLoggedIn()){
      this.display = true;
    }else
      this.display = false;
     //enviar formulario a servicio de log-in sanitizar de ser necesario
  }

  
}
