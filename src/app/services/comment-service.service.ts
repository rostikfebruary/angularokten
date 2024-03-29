import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComent} from "../interfaces/comment.interface";
import {urls} from "../const/urls";

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IComent[]>{
    return this.httpClient.get<IComent[]>(urls.comments.base)
  }

  getById(id:number):Observable<IComent>{
    return this.httpClient.get<IComent>(urls.comments.byId(id))
  }
}
