import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { Button, ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { Todo } from './model/todo.model';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    //primeng
    InputTextModule,
    CardModule,
    ButtonModule,
    AccordionModule,
    InputTextareaModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onUpdateTodo(_t33: Todo) {
    this.todos[_t33.id].name = _t33.name;
    this.todos[_t33.id].desc = _t33.desc;
    this.todos[_t33.id].editMode = false;
    this.todos[_t33.id].completed = false;
  }

  onDeleteTodo(id: number) {
    this.todos.splice(id, 1);
  }
  onCompleteTodo(id: number) {
    this.todos[id].completed = !this.todos[id].completed;
  }
  onEditTodo(id: number) {
    this.todos[id].editMode = true;
  }
  onCreateTodo() {
    this.todos.push({
      id: this.todos.length,
      name: this.todoForm?.value?.name || "",
      desc: this.todoForm?.value?.desc || "",
      completed: false,
      editMode: false
    })
    this.todoForm.reset();
  }
  title = 'my-list';
  todoForm = new FormGroup({
    name : new FormControl("") || "",
    desc : new FormControl("") || ""
  })
  todos : Todo[] = [];
}
