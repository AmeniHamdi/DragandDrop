import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  form !: FormGroup;

  constructor( private formBuilder: FormBuilder, private router: Router){

    this.form= formBuilder.group(
      {
        title : ['', Validators.required],
        description : ['', Validators.required],
        status : ['', Validators.required]
      }
    )

  }

  
 /* get getTitle(){
    return this.form.get('title');
  }

  
  get getDescription(){
    return this.form.get('description');
  }

  
  get getStatus(){
    return this.form.get('status');
  }
*/
  onSubmit(){
    console.log("Submit successful");
    console.log("Title : "+ this.form.value.title + "\tDescription : "+ this.form.value.description + "\tStatus : "+ this.form.value.status)
  }

}
