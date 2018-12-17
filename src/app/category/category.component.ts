import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  tasks = [
      {
        name: 'Angular Session One',
        category: 'CDAC',
        status: true
      },
      {
          name: 'Angular Session Two',
          category: 'CDAC',
          status: false
      },
      {
          name: 'Angular Session Three',
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
