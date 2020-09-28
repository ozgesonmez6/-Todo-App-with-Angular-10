import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoService } from 'src/app/services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data :any = {};

  constructor(
    private todoService: TodoService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

    this.getAllTodos();

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.updateTodo();
  }

  addTodo(todo) {
    const obj = { todo: todo.value };
    this.todoService.addTodo(obj)
      .subscribe((res: any) => {
        console.log(res)
        this.openSnackBar(res.message);
        this.getAllTodos();
        todo.value = " ";
      }, error => {
        console.log('Error:', error)
      })
  }

  getAllTodos() {
    this.todoService.getAllTodos()
      .subscribe(res => {
        Object.keys(res).forEach(key => {
          console.log(res)
          this.data[key] = res[key];
        });
      }, error => {
        console.log('Error:', error)
      })
  }

  updateTodo() {
    this.todoService.updateTodo(this.data)
      .subscribe(res => {
        console.log(res)
        this.getAllTodos();
      }, error => {
        console.log('Error:', error)
      })
  }

  removeTodo(id) {

    if (confirm("Silmek İstediğinize Emin Misiniz?")) {
      this.todoService.removeTodo(id)
        .subscribe(res => {
          console.log(res)
          this.getAllTodos();
        }, error => {
          console.log('Error:', error)
        })
    }

  }

  openSnackBar(message: string, action: string = "Tamam") {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


}




