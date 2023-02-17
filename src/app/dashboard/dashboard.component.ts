import { Component } from '@angular/core';
import { VERSION, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { TodoService } from '../services/todo.service';
import { firstValueFrom } from 'rxjs';
import { Status, Todo } from '../models/todo.model';
import { PeriodService } from '../services/period.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
  
  constructor(private todoService: TodoService, private periodService: PeriodService,private router: Router){}
 
  name = 'Angular Material ' + VERSION.major + ' Kanban board';
  // Intialization
  public board: Board = new Board('Test Board', [
    new Column('TODO', 0, []),
    new Column('In Progress', 1, []),
    new Column('DONE', 2, []),
  ]);

  public async ngOnInit() {
    const tasks = await firstValueFrom(this.todoService.getAllTodos());

    const tasksInTodo = tasks.filter(function (task) {
      return task.status === Status.TODO
    });

    const tasksInProgress = tasks.filter(function (task) {
      return task.status === Status.IN_PRPGRESS
    });

    const tasksInDone = tasks.filter(function (task) {
      return task.status === Status.DONE
    });


    /*function filter(array, callback) {
      const result = [];
      for (let i = 0; i < array.length; i++) {
        // filter
        if (callback(array[i])) {
          result.push(array[i])
        }

        // map
        result.push(callback(array[i]))
      }
      return result;
    }*/
    
    this.board.columns = [new Column('TODO', 0, tasksInTodo), new Column('In Progress', 1, tasksInProgress),
    new Column('DONE', 2, tasksInDone)]

  }

  public async drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
          console.log(event)
    }
  
    await firstValueFrom(this.todoService.updateTodoStatus(event.container.data[0].id, Number(event.container.id)))
  }
  GoToTodo() {
    this.router.navigate(['sprint']);
}
  
}