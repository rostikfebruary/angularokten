import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {IComent} from "../../interfaces/comment.interface";
import {CommentServiceService} from "../../services/comment-service.service";
import {NgFor, NgIf} from "@angular/common";
import {ComentComponent} from "../coment/coment.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ComentComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()
  post: IPost




  constructor(
    private router:Router,
    private activatedRout:ActivatedRoute
  ) {}


  getComment():void {
    this.router.navigate([this.post.id],{
      relativeTo: this.activatedRout

  })
  }



}
