import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks = [
      {
        name: 'Angular Session 1',
        category: 'CDAC',
        status: true
      },
      {
          name: 'Angular Session 2',
          category: 'CDAC',
          status: false
      },
      {
          name: 'Angular Session 3',
          category: 'CDAC',
          status: false
      }
  ]

  listPage = true;
  formPage = false;
  editForm = false;
  
  constructor() { }

  ngOnInit() {
  }

  showNewToDoForm(){
    this.listPage = false;
    this.formPage = true;
    this.editForm=false;
  
  }

  onToDoAdded(toDo) {
    this.tasks.push(toDo);
    this.formPage = false;
    this.listPage = true;
    this.editForm=false;
  }

  showEditToDoForm()
  {
    this.editForm=true;
    this.formPage=false;
    this.listPage=false;

  }
  onToEdited(toDo){
    this.tasks.push(toDo);
    this.formPage = false;
    this.listPage = true;
    this.editForm=false;
  }



}
