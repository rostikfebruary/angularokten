import { Component } from '@angular/core';
import {PostsComponent} from "../../components/posts/posts.component";

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [
    PostsComponent
  ],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent {

}
