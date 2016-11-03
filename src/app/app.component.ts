import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})

export class AppComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  addNew(newTitle: string, newDeadline: string, newPriority: number) {
    this.todoService.newTodo(newTitle, newDeadline, newPriority).subscribe(todo => this.todos.unshift(todo));
  }

  getTodos() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe(todo => this.getTodos());
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
