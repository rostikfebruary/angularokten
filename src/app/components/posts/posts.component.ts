import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";
import {PostServiceService} from "../../services/post-service.service";
import {PostComponent} from "../post/post.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  @Input()
  posts:IPost[]

  constructor(private postService:PostServiceService) {
  }
  ngOnInit() :void{
    this.postService.getAll().subscribe(value => this.posts = value)
  }




}
