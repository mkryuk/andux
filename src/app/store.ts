import { INCREMENT, DECREMENT } from './actions';
import { Map } from 'immutable';
export interface IAppState {
  counter: number;
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
};

export function rootReducer(state: Map<string, any>, action): Map<string, any> {
  switch (action.type) {
    case INCREMENT:
      // we're losing typed state
      // state.set('nonexistentProperty', true);
      return state.set('counter', state.get('counter') + 1);
    case DECREMENT:
      return state.set('counter', state.get('counter') - 1);
  }
  return state;
}
