import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'ng2-blog-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/ng2-blog.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
])
export class Ng2BlogApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
