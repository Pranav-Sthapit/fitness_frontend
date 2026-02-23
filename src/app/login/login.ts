import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {validateUsername,validatePassword} from '../validations';
import { Signing } from '../services/signing';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: '../signing-page/signing-page.css',
})
export class Login {
  username = '';
  password = '';
  usernameError = '';
  passwordError = '';
  formValid = false;

  constructor(private router: Router,private signingService:Signing) {}

  


  validate() {

    this.usernameError=validateUsername(this.username);
    this.passwordError=validatePassword(this.password);

    return( !this.usernameError && !this.passwordError);

  }

  login() {

    if(!this.validate()) return;

    this.signingService.login(this.username,this.password).subscribe({
      next:(res)=>{
        if(res.status==200){
          localStorage.setItem("userId",res.userId);
          this.router.navigate(['/home']);
        }
        else{
          alert(res.message);
          console.error(res.message);
        }
      },
      error:(err)=>{
        console.error(err);
      }
    });
    
  }
}
