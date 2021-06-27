import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,AbstractControl, ValidationErrors } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Cliente } from 'src/app/interfaces/cliente';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submit: boolean = false;
  constructor(private fb:FormBuilder, private snack: MatSnackBar,private servicioUsuarios: UserService) {
    this.signupForm = this.fb.group({
      email: [''], 
      email2: [''],
      pass:['', Validators.minLength(8)],
      pass2:['', Validators.minLength(8)],
    }, {validators: [Validators.required,this.signupValidator]}); //para validar el vormulario de forma global
    //el {validators: } es para indicar que es un objecto abstractControlOptions
    //signupValidator es una funcion que crea un validador con las opciones requeridas, tiene que devolver un objeto tipo validatorError
   }

  ngOnInit(): void {
  }

  onSubmit(){
    let cliente:Cliente = {
      Name: this.signupForm.value.email.toString,
      Pass: this.signupForm.value.pass.toString,
      Mail: this.signupForm.value.email.toString
    }
    this.servicioUsuarios.signup(cliente)
    this.submit = true;
  }

  err(){
    if(this.signupForm.invalid && this.submit)
      return true;
    return false;  
  }

    signupValidator(control: AbstractControl): ValidationErrors | null {
    if (control.get('email').value != control.get('email2').value){
      this.snack.open("Error, revise que su correos sean iguales", "ok");
      control.get('email')?.setErrors({NoMatch: true})
      control.get('email2')?.setErrors({NoMatch: true})
      return ({NoMatch:true}) 
    }
    if (control.get('pass').value != control.get('pass2').value){
      this.snack.open("Error, revise que su contraseñas sean iguales", "ok");
      control.get('pass')?.setErrors({NoMatch: true})
      control.get('pass2')?.setErrors({NoMatch: true})
      return ({NoMatch:true}) 
    }
    return null;
  }

  
}
