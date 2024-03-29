import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {IPost} from "../../interfaces/post.interface";
import {IComent} from "../../interfaces/comment.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PostServiceService} from "../../services/post-service.service";
import {CommentServiceService} from "../../services/comment-service.service";

@Component({
  selector: 'app-coment',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './coment.component.html',
  styleUrl: './coment.component.css'
})
export class ComentComponent {
  post: IPost
  coment:IComent
  constructor(
    private activateRoute: ActivatedRoute,
    private router:Router,
    private comentService:CommentServiceService
  ) {
    this.activateRoute.params.subscribe(({id}) =>{
      this.coment = this.router.getCurrentNavigation()?.extras.state as IComent

      if (!this.coment){
        this.comentService.getById(id).subscribe(value => this.coment = value)
      }
    })
  }
}
