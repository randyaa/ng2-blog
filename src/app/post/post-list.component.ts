import {
    Component,
    OnInit,
} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AngularFire} from 'angularfire2';

import {PostViewComponent} from "./post-view.component";
import {Post} from "./post.model";

@Component({
  moduleId: __moduleName,
  selector: 'ngb-post-list',
  templateUrl: 'post-list.component.html',
  providers: [],
  directives: [
      PostViewComponent
  ]
})
export class PostListComponent implements OnInit {

  fb_posts:Observable<Post[]>;

  constructor(
    private angularFire: AngularFire
  ) {}

  ngOnInit() {

    this.fb_posts = this.angularFire.list('/posts', {query:{orderByChild:'title'}} );

  }
}
