import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page">
      <h1>Welcome 👋</h1>
      <p>This is a small demo app showing core Angular building blocks:</p>
      <ul>
        <li><strong>Components</strong> — Home, Todo List, About are all separate components</li>
        <li><strong>Routing</strong> — navigate between pages without a full reload</li>
        <li><strong>Services</strong> — todo data is managed in a shared TodoService</li>
        <li><strong>Signals</strong> — reactive state that updates the UI automatically</li>
        <li><strong>Forms</strong> — add new todos using two-way data binding</li>
      </ul>
      <a routerLink="/todos" class="cta">Try the Todo List →</a>
    </div>
  `,
  styles: [`
    .page { max-width: 640px; margin: 0 auto; padding: 40px 24px; font-family: Arial, sans-serif; }
    h1 { margin-bottom: 12px; }
    ul { line-height: 1.9; }
    .cta {
      display: inline-block; margin-top: 20px; padding: 10px 18px;
      background: #1976d2; color: #fff; border-radius: 6px; text-decoration: none;
    }
    .cta:hover { background: #125a9c; }
  `]
})
export class HomeComponent {}
