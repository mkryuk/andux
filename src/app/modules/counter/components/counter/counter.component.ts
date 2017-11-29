import { INCREMENT, DECREMENT } from '../../actions';
import { ICounterState } from '../../store';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @select(s => s.counter.counter) counter: Observable<number>;

  constructor(private ngRedux: NgRedux<ICounterState>) { }

  ngOnInit() {
    // we can subscribe to counter if we need
    // this.counter.subscribe(data => { console.log(data); });
  }

  public increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  public decrement() {
    this.ngRedux.dispatch({ type: DECREMENT });
  }

}
