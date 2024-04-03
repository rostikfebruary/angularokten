import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/posts.interface";
import {urls} from "../const/urls";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts.base)
  }

  getById(id: number):Observable<IPost>{
    return  this.httpClient.get<IPost>(urls.posts.byId(id))
  }

}
