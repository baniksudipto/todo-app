import {Component, OnChanges, OnInit} from '@angular/core';
import {LocalStorageService} from '../local-storage.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class TodoList implements OnInit, OnChanges {
  inputText: string;
  todoList: string[];
  doneItems: string[];

  constructor(private storageService: LocalStorageService) {
  }

  ngOnInit() {
    console.log('ng on init called');
    this.todoList = this.storageService.fetchTodoItems();
    this.doneItems = this.storageService.fetchDoneItems();
  }

  ngOnChanges() {
    console.log('ng on changes called');
  }

  addTodo() {
    const text = this.inputText.trim();
    if (text === '') {
      return;
    }
    this.storageService.addTodoItem(text);
    this.inputText = '';
  }

  changeTask($event: any) {
    const index = $event['index'];
    const done = $event['done'];
    this.storageService.changeTodoItem(index, done);
  }

  clearDoneItems() {
    this.doneItems = [];
    this.storageService.clearDoneItems();
  }
}
