import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  getTodos (): Observable<Todo[]> {
    return this.http.get('http://localhost:4201').map((res: Response) => (res.json()));
  }

  newTodo (title: string, deadline: string, priority: number): Observable<Todo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify({ title: title, deadline: deadline, priority: priority });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:4201', body, options).map((res: Response) => (res.json()));
  }

  deleteTodo (id: string): Observable<Todo> {
    return this.http.delete('http://localhost:4201/' + id).map((res: Response) => (res.json()));
  }
}
