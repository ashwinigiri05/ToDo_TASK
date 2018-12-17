import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

 
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