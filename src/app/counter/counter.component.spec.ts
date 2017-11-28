import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { NgRedux } from '@angular-redux/store';
import { rootReducer } from '../store';
import { INCREMENT, DECREMENT } from './../actions';


describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [NgRedux]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

describe('reducers', () => {
  it('should handle INCREMENT action', () => {
    let state;
    state = rootReducer({ counter: 0 }, { type: INCREMENT });
    expect(state).toEqual({ counter: 1 });
  });

  it('should handle DECREMENT action', () => {
    let state;
    state = rootReducer({ counter: 0 }, { type: DECREMENT });
    expect(state).toEqual({ counter: -1 });
  });
});

