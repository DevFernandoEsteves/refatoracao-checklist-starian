import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Todo List';
  todos: any[] = [];
  newTodo: any = { title: '', completed: false };
  apiUrl = 'http://localhost:8000/tarefas';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.http.get('http://localhost:8000/todo/list').subscribe(
      (response: any) => {
        this.todos = response.data;
      },
      (erro) => {
        console.error('Erro ao carregar tarefas:', erro);
        this.todos = [
          { id: 1, title: 'Tarefa offline 1', completed: false },
          { id: 2, title: 'Tarefa offline 2', completed: true }
        ];
      }
    );
  }

  addTodo() {
    if (!this.newTodo.title.trim()) return;
    this.http.get('http://localhost:8000/todo/creare', {
      params: { title: this.newTodo.title }
    }).subscribe(
      (response: any) => {
        this.getTodos();
      },
      (erro) => {
        console.error('Erro ao adicionar tarefa:', erro);
        const fakeTodo = {
          id: Math.floor(Math.random() * 1000),
          title: this.newTodo.title,
          completed: false
        };
        this.todos.push(fakeTodo);
        this.newTodo = { title: '', completed: false };
      }
    )
  }

  removeTodo(id: number) {
    // this.http.delete(`http://localhost:8000/todo/problem-CSRF-token/${id}`).subscribe(
    this.http.get(`http://localhost:8000/todo/delete/${id}`).subscribe(
      () => {
        this.getTodos();
      },
      (erro) => {
        console.error('Erro ao remover tarefa:', erro);
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    );
  }
}
