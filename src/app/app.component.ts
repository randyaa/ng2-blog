import {
    OnInit,
    Component,
} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Route} from '@angular/router-deprecated';

import {Dir} from "@angular2-material/core";
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {PostsRouteComponent} from './routes/posts-router.component';
import {BlogDetails} from "./blog-details/blog-details.model";
import {AboutRouteComponent} from './about/about.component';
import {PostListComponent} from "./post/post-list.component";

@Component({
  moduleId: __moduleName,
  selector: 'app-root',
  providers: [
    ROUTER_PROVIDERS,
    MdIconRegistry,
  ],
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    Dir,
    MD_BUTTON_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MdIcon,
  ],
  pipes: []
})
@RouteConfig([
  new Route({path: '/', name: 'Home', component: PostListComponent, useAsDefault: true}),
  new Route({path: '/about', name: 'About', component: AboutRouteComponent}),
  new Route({path: '/posts/...', name: 'Posts', component: PostsRouteComponent}),
])
export class AppComponent implements OnInit {
  private blog:BlogDetails;

  ngOnInit(){
    this.blog = <BlogDetails>{
      name: 'The Blog',
      aboutText: 'About The Blog'
    }
  }

  //here for the tests

  defaultMeaning: number = 42;

}
