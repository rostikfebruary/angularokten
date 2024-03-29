import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {UsersComponent} from "../../components/users/users.component";

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    RouterOutlet,
    UsersComponent
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
