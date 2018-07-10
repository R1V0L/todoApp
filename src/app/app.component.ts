import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput: string;
  
  todos = [];

  createTodo() {
    let trimmedInput = this.todoInput.trim();
    if(trimmedInput !==""){
      this.todos.push(this.todoInput);
    }
    // code that will create a todo
    this.todoInput = "";    
  }

  editTodo(todo) {
    let index = this.todos.indexOf(todo);
    console.log(index);
    let tempTodoDesc = this.todos[index];
    this.todos[index] = prompt("Please edit your todo", this.todos[index]);
    console.log(this.todos[index]);
    if (this.todos[index] == null) {
      this.todos[index] = tempTodoDesc
    }
    console.log(this.todos[index]);


    // rename that input to whatever I write
    // edits the todo
  }

  deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    // deletes todo
  }

  deleteA() {
    this.todos = [];
  }
}
