import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {IComent} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()
  post: IPost
  coment: IComent

  constructor(
    private router:Router,
    private activatedRout:ActivatedRoute
  ) {}


  getComment():void {
    this.router.navigate([this.post.id],{
      relativeTo: this.activatedRout,
      state: this.coment
    })

  }
}
