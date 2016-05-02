import {
    Component,
    OnInit,
} from 'angular2/core';

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

  posts:Array<Post>;

  constructor() {}

  ngOnInit() {
    this.posts = [
      {
        title:"Post 3",
        body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim ultricies nunc. Etiam consectetur, leo nec feugiat gravida, lectus dolor auctor orci, vel ullamcorper nisi magna ac metus. Pellentesque vulputate, nunc nec consequat interdum, velit lectus viverra ipsum, in congue nibh diam eu arcu. Etiam eu sem porta, fermentum mauris ut, convallis ante. In vestibulum feugiat mauris, at pulvinar felis imperdiet ac. In a quam eget diam tempus lacinia. Aenean lacinia a neque id scelerisque. Etiam turpis magna, accumsan non ultricies vel, tempus vel tortor. Praesent viverra est vitae lectus suscipit sollicitudin.</p>
        <p>Curabitur metus tellus, faucibus pulvinar vestibulum eu, elementum vel orci. Cras commodo, ante eu laoreet fermentum, mi arcu hendrerit diam, vel bibendum ante nisl eget ante. Duis nec cursus ante. Duis eu nisl cursus, venenatis diam id, ultrices sem. Morbi laoreet nec sapien eu scelerisque. Nunc non consectetur velit. Mauris non ipsum ac tellus suscipit rutrum. Nullam dictum mi erat, et iaculis diam vehicula in. Vivamus non condimentum magna. Vestibulum non consectetur erat. Etiam in velit euismod, porttitor felis at, feugiat purus. Nullam pulvinar ac nulla aliquam fringilla. Mauris eget dapibus urna. Aliquam non lobortis elit, eu iaculis augue. Donec in enim tincidunt, sollicitudin justo at, porta augue.</p>
        <p>Maecenas ac sem nec velit euismod maximus et elementum augue. Aenean nec felis vel neque congue tristique vel tristique dui. Etiam convallis ex nibh, eget convallis odio faucibus nec. Nunc neque nisi, pellentesque id placerat sed, feugiat quis mauris. Suspendisse dolor arcu, semper vitae viverra sed, lacinia sed nisi. Quisque tempor accumsan nunc, et varius quam condimentum sed. Donec leo sem, facilisis quis eleifend sit amet, efficitur in lectus. Praesent vel elit libero. Vestibulum egestas nisi at ex iaculis, et volutpat ligula mattis.</p>
        `
      },
      {
        title:"Post 2",
        body: `
        <p>Etiam rutrum ullamcorper lorem a tristique. Aenean vestibulum ligula dolor, nec eleifend nunc eleifend lacinia. Vestibulum laoreet pharetra nulla. Aenean laoreet magna lobortis nulla egestas convallis. Morbi sit amet ipsum metus. Fusce pulvinar sagittis mauris id suscipit. Donec et purus leo. Vivamus eu velit posuere velit luctus varius consectetur a nisl.</p>
        <p>Morbi lectus purus, pulvinar ut consequat ac, malesuada ac eros. Cras a interdum metus, sit amet convallis arcu. Aliquam pharetra nunc ac tincidunt tincidunt. Pellentesque non quam ac ex hendrerit semper. Etiam nec risus a tellus tincidunt egestas. Ut eu diam velit. Cras euismod elit a nunc aliquet suscipit. Fusce rutrum ante non elementum volutpat. Mauris in diam semper, malesuada enim id, auctor magna. Fusce accumsan maximus nisi, vel mattis ligula finibus nec. Curabitur vel mi a nisl facilisis vehicula. Aliquam faucibus turpis ac tortor consectetur condimentum. Sed ut augue consectetur magna laoreet eleifend ut in enim. Quisque ac porta tellus. Nunc id leo eget eros cursus convallis ac non massa.</p>
        `
      },
      {
        title:"Post 1",
        body: "This is the body of post 1"
      },

    ]
  }
}
