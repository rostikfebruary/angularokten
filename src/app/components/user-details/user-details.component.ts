import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../interfaces/user.interface";
import {UserServiceService} from "../../services/user-service.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{

  user:IUser
  constructor(private activatedRoute:ActivatedRoute, userService:UserServiceService) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({userData}) => this.user = userData)
  }

}
