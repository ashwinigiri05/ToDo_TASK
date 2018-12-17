import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos;
  @Output() addNewToDoButtonClicked = new EventEmitter();
  @Output() addNewToBeEdited= new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onNewButtonClick() {
    this.addNewToDoButtonClicked.emit();
  }
  
 onEditButtonClick(){
  this.addNewToBeEdited.emit();
 }

}
