import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  myForm: any;



  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      taskName: ['', Validators.required],
      desc: ['', Validators.required],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      efforts: ['', [Validators.required]],
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid, form.value); // true or false


  }

}
