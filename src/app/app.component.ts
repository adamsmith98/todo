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
    this.todoService.newTodo(newTitle, newDeadline, newPriority).subscribe(todo => this.todos.push(todo));
  }

  getTodos() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
