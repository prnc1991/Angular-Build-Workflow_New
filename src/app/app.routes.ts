import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'todos', component: TodoComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];
