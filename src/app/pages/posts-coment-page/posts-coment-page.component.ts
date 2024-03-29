import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {ComentComponent} from "../../components/coment/coment.component";

@Component({
  selector: 'app-posts-coment-page',
  standalone: true,
  imports: [
    NgIf,
    ComentComponent
  ],
  templateUrl: './posts-coment-page.component.html',
  styleUrl: './posts-coment-page.component.css'
})
export class PostsComentPageComponent {

}
