import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { TodoService } from './services/todo.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'Todo List';
  todos: Todo[] = [];
  newTodo: Todo = { id: 0, title: '', completed: false };

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((res) => {
      if (Array.isArray(res)) {
        this.todos = res;
      } else {
        console.error('Erro ao buscar todos:', res.message);
      }
    });
  }

  createTodo(): void {
    const title = this.newTodo.title.trim();
    if (!title) return;

    this.todoService.createTodo(title).subscribe((res) => {
      if ('data' in res) {
        this.getTodos();
      } else {
        console.error('Erro ao adicionar todo:', res.message);
      }
      this.newTodo.title = '';
    });
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id).subscribe((res) => {
      if ('erro' in res) {
        console.error('Erro ao remover todo:', res.message);
      } else {
        this.getTodos();
      }
    });
  }
}
