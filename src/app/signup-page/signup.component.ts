import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'signup-page',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
   // private route: ActivatedRoute,
    private router: Router) {
}
  Onsubmit() {
    this.router.navigate(['login']);
}

}
