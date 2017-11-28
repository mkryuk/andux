import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { NgRedux } from '@angular-redux/store';
import { rootReducer } from '../store';


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
  it('should handle INCREMENT_COUNTER action', () => {
    let state;
    state = rootReducer({ counter: 0 }, { type: 'INCREMENT_COUNTER' });
    expect(state).toEqual({ counter: 1 });
  });

  it('should handle DECREMENT_COUNTER action', () => {
    let state;
    state = rootReducer({ counter: 0 }, { type: 'DECREMENT_COUNTER' });
    expect(state).toEqual({ counter: -1 });
  });
});

