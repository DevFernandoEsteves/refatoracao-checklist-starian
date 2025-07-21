import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';
import { Todo } from '../models/todo.model';
import { ErrorResponse } from '../models/response/error-response.model';
import { TodosResponse } from '../models/response/todo-response.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private baseUrl = 'http://localhost:8000/api/todo';

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  getTodos(): Observable<Todo[] | ErrorResponse> {
    return this.http.get<{ data: Todo[] }>(`${this.baseUrl}`).pipe(
      map(response => response.data),
      catchError(error => of(this.errorHandler.formatError('getTodos', error)))
    );
  }

  createTodo(title: string): Observable<TodosResponse | ErrorResponse> {
    return this.http.post<TodosResponse>(`${this.baseUrl}`, { title }).pipe(
      catchError(error => of(this.errorHandler.formatError('createTodo', error)))
    );
  }

  removeTodo(id: number): Observable<TodosResponse | ErrorResponse> {
    return this.http.delete<TodosResponse>(`${this.baseUrl}/${id}`).pipe(
      catchError(error => of(this.errorHandler.formatError('removeTodo', error)))
    );
  }
}
