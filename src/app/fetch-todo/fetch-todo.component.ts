import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-todo',
  templateUrl: './fetch-todo.component.html',
  styleUrls: ['./fetch-todo.component.scss']
})
export class FetchTodoComponent implements OnInit {
  ItemsArray:any;
  showTable: boolean =false;
  constructor() { }

  ngOnInit(): void {
  }
  getTodoList () {
    this.showTable= true;
    this.ItemsArray= [{
      "taskName": "s",
      "desc": "s",
      "startDate": "2023-06-14",
      "endDate": "2023-06-29",
      "email": "s@s.com",
      "efforts": "3"
  },
  {
    "taskName": "ss",
    "desc": "as",
    "startDate": "2023-06-24",
    "endDate": "2023-06-30",
    "email": "22@s.com",
    "efforts": "13"
}
]
  }
}
