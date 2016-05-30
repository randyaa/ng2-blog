import {
    OnInit,
    Component,
} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Route} from '@angular/router-deprecated';

import {Dir} from "@angular2-material/core";
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav";
import {MdToolbar} from "@angular2-material/toolbar";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";

import {PostsRouteComponent} from './routes/posts-router.component';
import {BlogDetails} from "./blog-details/blog-details.model";
import {AboutRouteComponent} from './about/about.component';
import {PostListComponent} from "./post/post-list.component";


@Component({
  moduleId: __moduleName,
  selector: 'ng2-blog-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: './ng2-blog.component.html',
  styleUrls:['./ng2-blog.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    Dir,
    MdButton,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
  ],
  pipes: []
})
@RouteConfig([
  new Route({path: '/', name: 'Home', component: PostListComponent, useAsDefault: true}),
  new Route({path: '/about', name: 'About', component: AboutRouteComponent}),
  new Route({path: '/posts/...', name: 'Posts', component: PostsRouteComponent}),
])
export class Ng2BlogApp implements OnInit {
  private blog:BlogDetails;

  ngOnInit(){
    this.blog = <BlogDetails>{
      name: 'The Blog',
      aboutText: 'About The Blog'
    }
  }

  //here for the tests

  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
