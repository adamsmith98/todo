import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [{title: 'Maths homework', deadline: 'Yesterday', priority: 5},
                   {title: 'Wash dishes', deadline: 'Today', priority: 3},
                   {title: 'Go shopping', deadline: 'Tomorrow', priority: 4},
                   {title: 'Make dinner', deadline: '6pm today', priority: 5}];
}

class Todo {
  title: string;
  deadline: string;
  priority: number;
}
