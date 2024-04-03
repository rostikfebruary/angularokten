import { Component } from '@angular/core';
import {UsersComponent} from "../../components/users/users.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    UsersComponent,
    RouterOutlet
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
