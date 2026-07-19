import { Injectable, signal } from '@angular/core';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private nextId = 4;

  private _todos = signal<Todo[]>([
    { id: 1, text: 'Learn Angular components', done: true },
    { id: 2, text: 'Understand routing', done: true },
    { id: 3, text: 'Build a real project', done: false },
  ]);

  todos = this._todos.asReadonly();

  add(text: string): void {
    const trimmed = text.trim();
    if (!trimmed) return;
    this._todos.update((list) => [
      ...list,
      { id: this.nextId++, text: trimmed, done: false },
    ]);
  }

  toggle(id: number): void {
    this._todos.update((list) =>
      list.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  remove(id: number): void {
    this._todos.update((list) => list.filter((t) => t.id !== id));
  }

  get pendingCount(): number {
    return this._todos().filter((t) => !t.done).length;
  }
}
