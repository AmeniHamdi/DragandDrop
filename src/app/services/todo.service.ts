import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from '../models/todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = "http://localhost:8086/api/todo/";
  constructor(private http: HttpClient) {}

  private token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzb25kZXNAZ21haWwuY29tIiwiaWF0IjoxNjc2NjQwMDUyLCJleHAiOjE2NzY3MjY0NTJ9.tdUxpyroht0q6bcKrpeGBxMK9H9bXhIzMZATdYNjTydOejF01AqpdX5HfUvRO0O8";
  private headers = {"Authorization": `Bearer ${this.token}`}
  
  public getAllTodos(): Observable<Todo[]> {
    return this.http.get(this.baseUrl, { headers: this.headers, responseType: "json" }) as Observable<Todo[]>
  }

  public addTodo(todo:Todo): Observable<Todo> {
    return this.http
        .post(this.baseUrl, todo, { headers: this.headers, responseType: "json" }) as Observable<Todo>
  }
  public getTodoById(todoId: number): Observable<Todo> {
    return this.http.get(`${this.baseUrl}${todoId}`, { headers: this.headers, responseType: "json" }) as Observable<Todo>
  }
  public updateTodoStatus(todoId: number, statusId: number): Observable<Todo> {
    return this.http.put(`${this.baseUrl}${todoId}/${statusId}`, {}, { headers: this.headers, responseType: "json" }) as Observable<Todo>
  }


}
