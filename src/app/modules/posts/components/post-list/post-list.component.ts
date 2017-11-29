import { SELECT_POST, UNSELECT_ALL_POSTS, DELETE_POST } from './../../actions';
import { PostsHttpService } from '../../services/posts-http.service';
import { PostsLocalService } from '../../services/posts-local.service';
import { IPost, IPostsState } from '../../store';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @select(s => s.posts.allPosts) posts;

  constructor(private ngRedux: NgRedux<IPostsState>, private postsService: PostsLocalService) { }

  ngOnInit() {
    this.postsService.loadPosts();
  }

  public selectPost(post: IPost) {
    // we could move this to service too
    this.ngRedux.dispatch({ type: UNSELECT_ALL_POSTS });
    this.ngRedux.dispatch({ type: SELECT_POST, id: post.id });
    this.postsService.loadPostComments(post.id);
  }

  public deletePost(post: IPost) {
    this.ngRedux.dispatch({ type: DELETE_POST, id: post.id });
  }

}
