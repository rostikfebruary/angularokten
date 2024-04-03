import { ResolveFn } from '@angular/router';
import {IUser} from "../../interfaces/user.interface";
import {inject} from "@angular/core";
import {UserServiceService} from "../user-service.service";

export const userDetailsResolver: ResolveFn<IUser> = (route, state) => {
  const {id} = route.params
  const userService = inject(UserServiceService)
  return userService.getById(id);
};
