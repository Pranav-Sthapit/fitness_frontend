import { Component } from '@angular/core';
import { Login } from '../login/login';
import { Register } from '../register/register';

@Component({
  selector: 'app-signing-page',
  imports: [Login,Register],
  templateUrl: './signing-page.html',
  styleUrl: './signing-page.css',
})
export class SigningPage {
  current='login';

  goToRegister(event:Event){
    event.preventDefault();
    this.current="register";
    console.log(this.current);
    
  }

  goToLogin(event:Event){
    event.preventDefault();
    this.current="login";
    console.log(this.current);
  }
}
