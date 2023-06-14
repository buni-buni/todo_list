import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component'
// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })


const routes: Routes = [
  { path: 'createList', component: CreateTodoComponent },
 // { path: 'expenses/detail/:id', component: ExpenseEntryComponent },
  { path: '', redirectTo: 'expenses', pathMatch: 'full' }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] })

export class AppRoutingModule { }
