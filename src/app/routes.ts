import {Routes} from '@angular/router';
import {TodoList} from './todolist/todo-list.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: TodoList,
    // data: { title: 'Heroes List' }
  }
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];
