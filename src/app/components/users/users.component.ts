import {Component, Input, OnInit} from '@angular/core';
import {UserComponent} from "../user/user.component";
import {IUser} from "../../interfaces/user.interface";
import {UserServiceService} from "../../services/user-service.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
@Input()
  users:IUser[]

  constructor(private userService:UserServiceService) {
  }

  ngOnInit():void {
  this.userService.getAll().subscribe(value => this.users=value)
  }

}
