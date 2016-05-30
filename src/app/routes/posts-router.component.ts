import {Component} from '@angular/core';
import {RouteConfig, RouterOutlet} from '@angular/router-deprecated';

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
