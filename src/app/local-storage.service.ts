import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';


const TODO_ITEMS = 'todo-items';
const DONE_ITEMS = 'done-items';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  tasks: string[] = [];
  done: string[] = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

  }

  fetchDoneItems(): string[] {
    this.done = this.getArrayFromLS(DONE_ITEMS);
    return this.done;
  }

  clearDoneItems() {
    this.done = [];
    this.setArrayToLS(DONE_ITEMS, this.done);
  }


  fetchTodoItems(): string[] {
    this.tasks = this.getArrayFromLS(TODO_ITEMS);
    return this.tasks;
  }

  addTodoItem(inputText: string): void {
    this.tasks.push(inputText);
    this.setArrayToLS(TODO_ITEMS, this.tasks);
  }

  changeTodoItem(index: number, done: boolean): void {
    if (done) {
      this.done.push(this.tasks[index]);
      this.setArrayToLS(DONE_ITEMS, this.done);
    }
    if (index >= 0) {
      this.tasks.splice(index, 1);
      this.setArrayToLS(TODO_ITEMS, this.tasks);
    }
  }

  private getArrayFromLS(key: string): string[] {
    return this.storage.get(key) || [];
  }

  private setArrayToLS(key: string, value: string[]): void {
    return this.storage.set(key, value);
  }
}
