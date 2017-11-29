import { tassign } from 'tassign';
import {
  SELECT_POST, UNSELECT_ALL_POSTS, DELETE_POST,
  FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR,
  FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR
} from './actions';
export interface IPost {
  body: string;
  id: number;
  isSelected: boolean;
  title: string;
  userId: number;
}

export interface IComment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}
export interface IPostsState {
  allPosts: IPost[];
  comments: IComment[];
  commentsLoading: boolean;
  commentsLoadingError: any;
  postsLoading: boolean;
  postsLoadingError: any;
}

export const POSTS_INITIAL_STATE: IPostsState = {
  allPosts: [],
  comments: [],
  commentsLoading: false,
  commentsLoadingError: null,
  postsLoading: false,
  postsLoadingError: null,
};

function fetchPostsRequest(state: IPostsState, action) {
  return tassign(state, { postsLoading: true });
}

function fetchPostsSuccess(state: IPostsState, action) {
  return tassign(state, { allPosts: action.posts, postsLoading: false });
}

function fetchPostsError(state: IPostsState, action) {
  return tassign(state, { postsLoadingError: action.err, postsLoading: false });
}
function fetchCommentsRequest(state: IPostsState, action) {
  return tassign(state, { commentsLoading: true });
}

function fetchCommentsSuccess(state: IPostsState, action) {
  return tassign(state, { comments: action.comments, commentsLoading: false });
}

function fetchCommentsError(state: IPostsState, action) {
  return tassign(state, { commentsLoadingError: action.err, commentsLoading: false });
}

function selectPost(state: IPostsState, action) {
  const post = state.allPosts.find(p => p.id === action.id);
  // // Now, we need to find the position of this item in the array.
  const index = state.allPosts.indexOf(post);

  return tassign(state, {
    allPosts: [
      ...state.allPosts.slice(0, index),
      tassign(post, { isSelected: true }),
      ...state.allPosts.slice(index + 1),
    ]
  });
}

function deletePost(state: IPostsState, action) {
  return tassign(state, { allPosts: state.allPosts.filter(p => p.id !== action.id) });
}

function unselectAllPosts(state: IPostsState, action) {
  const posts = state.allPosts.filter(p => p.isSelected);
  let newState: IPostsState = tassign(state, { allPosts: state.allPosts });
  // // Now, we need to find the position of this item in the array.
  posts.forEach(post => {
    const index = state.allPosts.indexOf(post);
    newState = tassign(newState, {
      allPosts: [
        ...newState.allPosts.slice(0, index),
        tassign(post, { isSelected: false }),
        ...newState.allPosts.slice(index + 1),
      ]
    });
  });
  return newState;
}

export function postsReducer(state: IPostsState = POSTS_INITIAL_STATE, action): IPostsState {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: return fetchPostsRequest(state, action);
    case FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
    case FETCH_POSTS_ERROR: return fetchPostsError(state, action);
    case UNSELECT_ALL_POSTS: return unselectAllPosts(state, action);
    case SELECT_POST: return selectPost(state, action);
    case DELETE_POST: return deletePost(state, action);
    case FETCH_COMMENTS_REQUEST: return fetchCommentsRequest(state, action);
    case FETCH_COMMENTS_SUCCESS: return fetchCommentsSuccess(state, action);
    case FETCH_COMMENTS_ERROR: return fetchCommentsError(state, action);
  }

  return state;
}
