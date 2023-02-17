import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  userData =new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required])
  });

  constructor(
    // private route: ActivatedRoute,
     private router: Router) {
 }

  
  get getEmail(){
    return this.userData.get('email')
    }
  
    get getPassword(){
    return this.userData.get('password')
    }

    Onsubmit() {
      this.router.navigate(['signup']);

}

}
