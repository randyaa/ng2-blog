import {Component} from '@angular/core';
import {RouteConfig, RouterOutlet} from '@angular/router-deprecated';

@Component({
  template: '<p>the about page!</p>',
  providers: [],
  directives: [RouterOutlet]
})
export class AboutRouteComponent {
  constructor() {}
}
