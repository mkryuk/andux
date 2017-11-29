import { NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsHttpService } from './services/posts-http.service';
import { PostsLocalService } from './services/posts-local.service';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: [PostCommentsComponent, PostListComponent],
  exports: [PostCommentsComponent, PostListComponent],
  providers: [PostsHttpService, PostsLocalService]
})
export class PostsModule { }
