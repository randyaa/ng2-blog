import {
    Component,
    OnInit,
    Input,
    Pipe,
    PipeTransform,
} from "angular2/core";
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import {Post} from "./post.model";

@Component({
    moduleId: __moduleName,
    selector: 'ngb-post',
    templateUrl: './post-view.component.html',
    providers: [],
    directives: [
        MD_CARD_DIRECTIVES
    ],
    pipes: [

    ]
})
export class PostViewComponent {
    constructor() {}

    @Input() private post:Post;

}
