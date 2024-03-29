import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../../services/user-service.service";
import {IUser} from "../../interfaces/user.interface";
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
export class UserDetailsComponent {
  user: IUser

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService
  ) {
    this.activateRoute.params.subscribe(({id}) => {
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser

      if(!this.user){
        this.userService.getById(id).subscribe(value => this.user = value)
      }
    })


  }


}
