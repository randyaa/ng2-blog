import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {PostListComponent} from "../post/post-list.component";

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [],
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: '/list/...', name: 'List', component: PostListComponent, useAsDefault: true},
])
export class PostsRouteComponent {
  constructor() {}
}
