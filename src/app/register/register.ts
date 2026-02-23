import { Component } from '@angular/core';
import { validateUsername,validatePassword,validateName,validateEmail } from '../validations';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Signing } from '../services/signing';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: '../signing-page/signing-page.css',
})
export class Register {

  firstName=''
  lastName=''
  email=''
  username=''
  password=''

  usernameError=''
  passwordError=''
  emailError=''
  firstNameError=''
  lastNameError=''

  constructor(private router:Router,private signingService:Signing){}

  validate(){
    this.firstNameError=validateName(this.firstName,"first ");
    this.lastNameError=validateName(this.lastName,"last ");
    this.emailError=validateEmail(this.email);
    this.usernameError=validateUsername(this.username);
    this.passwordError=validatePassword(this.password);

    return( !this.usernameError && !this.passwordError && !this.emailError && !this.firstNameError && !this.lastNameError);
  }


  register(){
    if(!this.validate()) return;

    this.signingService.register(this.firstName,this.lastName,this.email,this.username,this.password).subscribe({
      next:(res)=>{
        if(res.status==200){
          alert(res.message);
          localStorage.setItem("userId",res.userId);
          this.router.navigate(['/home']);
        }else{
          alert(res.message);
        }
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }

}
