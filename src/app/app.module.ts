import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {TodoList} from './todolist/todo-list.component';
import {FormsModule} from '@angular/forms';
import {TodoitemComponent} from './todoitem/todoitem.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoList,
    TodoitemComponent,
    TodoitemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
