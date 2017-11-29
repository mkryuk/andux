import {
  FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR,
  FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR
} from './../actions';
import { IPostsState } from './../store';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgRedux, select } from '@angular-redux/store';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsHttpService {
  private readonly postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private readonly commentsUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

  constructor(private http: Http, private ngRedux: NgRedux<IPostsState>) { }

  public loadPosts() {
    this.ngRedux.dispatch({ type: FETCH_POSTS_REQUEST });
    return this.http.get(this.postsUrl).subscribe(posts => {
      this.ngRedux.dispatch({ type: FETCH_POSTS_SUCCESS, posts: posts.json() });
    }, err => {
      this.ngRedux.dispatch({ type: FETCH_POSTS_ERROR, err: err });
    });
  }

  public loadPostComments(postId: number) {
    this.ngRedux.dispatch({ type: FETCH_COMMENTS_REQUEST });
    return this.http.get(`${this.commentsUrl}${postId}`).subscribe(comments => {
      this.ngRedux.dispatch({ type: FETCH_COMMENTS_SUCCESS, comments: comments.json() });
    }, err => {
      this.ngRedux.dispatch({ type: FETCH_COMMENTS_ERROR, err: err });
    });
  }
}
