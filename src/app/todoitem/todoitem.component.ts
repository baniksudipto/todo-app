import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() text = '';
  @Input() index = -1;
  @Input() done = false;
  @Output() changeEvent = new EventEmitter<Object>();

  constructor() {
  }

  ngOnInit() {
  }

  removeThis() {
    this.changeEvent.emit({
      index: this.index,
      done: false,
    });
  }

  didThis() {
    this.changeEvent.emit({
      index: this.index,
      done: true,
    });
  }
}
