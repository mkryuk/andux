import { COUNTER_INITIAL_STATE, ICounterState, counterReducer } from './modules/counter/store';
import { POSTS_INITIAL_STATE, IPostsState, postsReducer } from './modules/posts/store';
import { IAppState } from './store';
import { combineReducers } from 'redux';

export interface IAppState {
  counter: ICounterState;
  posts: IPostsState;
}

export const INITIAL_STATE: IAppState = {
  counter: COUNTER_INITIAL_STATE,
  posts: POSTS_INITIAL_STATE
};

export const rootReducer = combineReducers<IAppState>({
  counter: counterReducer,
  posts: postsReducer
});
