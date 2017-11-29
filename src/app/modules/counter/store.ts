import { INCREMENT, DECREMENT } from './actions';
import { tassign } from 'tassign';
export interface ICounterState {
  counter: number;
}

export const COUNTER_INITIAL_STATE: ICounterState = {
  counter: 0,
};

export function counterReducer(state: ICounterState = COUNTER_INITIAL_STATE, action): ICounterState {
  switch (action.type) {
    case INCREMENT:
      return tassign(state, { counter: state.counter + 1 });
    case DECREMENT:
      return tassign(state, { counter: state.counter - 1 });
  }
  return state;
}
