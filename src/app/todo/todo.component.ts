import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="page">
      <h1>Todo List</h1>
      <p class="count">{{ todoService.pendingCount }} task(s) pending</p>

      <form (ngSubmit)="onAdd()" class="add-form">
        <input
          type="text"
          [(ngModel)]="newTodoText"
          name="newTodo"
          placeholder="Add a new task..."
          required
        />
        <button type="submit">Add</button>
      </form>

      <ul class="todo-list">
        @for (todo of todoService.todos(); track todo.id) {
          <li [class.done]="todo.done">
            <label>
              <input
                type="checkbox"
                [checked]="todo.done"
                (change)="todoService.toggle(todo.id)"
              />
              <span>{{ todo.text }}</span>
            </label>
            <button class="remove" (click)="todoService.remove(todo.id)">✕</button>
          </li>
        } @empty {
          <li class="empty">No tasks yet. Add one above!</li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .page { max-width: 640px; margin: 0 auto; padding: 40px 24px; font-family: Arial, sans-serif; }
    .count { color: #666; margin-bottom: 20px; }
    .add-form { display: flex; gap: 8px; margin-bottom: 24px; }
    .add-form input {
      flex: 1; padding: 10px 12px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;
    }
    .add-form button {
      padding: 10px 16px; background: #1976d2; color: #fff; border: none;
      border-radius: 6px; cursor: pointer;
    }
    .add-form button:hover { background: #125a9c; }
    .todo-list { list-style: none; padding: 0; }
    .todo-list li {
      display: flex; align-items: center; justify-content: space-between;
      padding: 10px 12px; border: 1px solid #eee; border-radius: 6px; margin-bottom: 8px;
    }
    .todo-list li.done span { text-decoration: line-through; color: #999; }
    .todo-list label { display: flex; align-items: center; gap: 10px; cursor: pointer; }
    .remove {
      background: none; border: none; color: #c0392b; cursor: pointer; font-size: 14px;
    }
    .empty { color: #999; text-align: center; border: none; }
  `]
})
export class TodoComponent {
  newTodoText = '';

  constructor(public todoService: TodoService) {}

  onAdd(): void {
    this.todoService.add(this.newTodoText);
    this.newTodoText = '';
  }
}
