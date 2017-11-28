import { INCREMENT, DECREMENT } from './../actions';
import { IAppState } from './../store';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @select(s => s.counter) counter: number;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    // this.counter = 0;
  }

  public increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
    // this.counter++;
  }

  public decrement() {
    this.ngRedux.dispatch({ type: DECREMENT });
    // this.counter--;
  }

}
