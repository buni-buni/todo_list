import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { FetchTodoComponent } from './fetch-todo/fetch-todo.component'

const routes: Routes = [
  { path: 'createList', component: CreateTodoComponent },
  { path: 'fetchList', component: FetchTodoComponent },
  { path: '', redirectTo: 'expenses', pathMatch: 'full' }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] })

export class AppRoutingModule { }
