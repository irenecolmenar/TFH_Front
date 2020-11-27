import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ColumnsTable } from '../table-list/table-list.component';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {

  public tasks: TaskDto[];
  public tasks$: BehaviorSubject<TaskDto[]>;
  public routeToP = '';
  public columnsP: ColumnsTable[];

  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog
  ) {
    this.tasks = [];
    this.tasks$ = new BehaviorSubject<TaskDto[]>(this.tasks);
    this.routeToP = '';
    this.columnsP = [
      { id: 'description', name: 'Descripción', pos: 'left', display: 'all' },
      { id: 'status', name: 'Estado', pos: 'left', display: 'all' },
      { id: 'taskPoint', name: 'TFCoins', pos: 'left', display: 'all' }];
  }

  ngOnInit(): void {
    this.updateTable();
  }

  updateTable() {
    this.httpClient.get<TaskDto[]>(environment.apiUrl + '/tasks')
      .pipe(
        map(arrayTasks =>
          arrayTasks.map(task => {
            return new TaskDto(task.description, task.key, task.name, task.status, task.taskPoint);
          })
        )
      ).subscribe(
        data => {
          this.tasks = data;
          this.tasks$.next(this.tasks);
        }
      );
  }

  newTask(): void {
    const dialogRef = this.dialog.open(NewTaskDialogComponent, {
      data: { name: '', description: '', taskPoint: 0 }
    });
    dialogRef.afterClosed().subscribe(result => {
      
      const newData = new TaskDto(result.description, "", result.name, "No empezado", result.taskPoint);
     
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      let options = {
        headers: httpHeaders
      };

      this.httpClient.post<void>(environment.apiUrl + '/tasks', JSON.stringify(newData), options)
        .subscribe(
          data => {
            const newData = new TaskDto(result.description, "", result.name, "No empezado", result.taskPoint);
            this.tasks.push(newData);
            this.tasks$.next(this.tasks);
          }
        );
    });
  }
}

export class TaskDto {
  public description: string;
  public key: string;
  public name: string;
  public status: string;
  public taskPoint: number;

  constructor(
    _description: string,
    _key: string,
    _name: string,
    _status: string,
    _taskPoint: number
  ) {
    this.description = _description;
    this.key = _key;
    this.name = _name;
    this.status = _status;
    this.taskPoint = _taskPoint;
  }
}
