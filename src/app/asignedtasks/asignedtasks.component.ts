import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ColumnsTable } from '../table-list/table-list.component';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../environments/environment';
import { KidDto } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-asignedtasks',
  templateUrl: './asignedtasks.component.html',
  styleUrls: ['./asignedtasks.component.less']
})
export class AsignedtasksComponent implements OnInit {

  public tasks: TaskDto[];
  public tasks$: BehaviorSubject<TaskDto[]>;
  public routeToP = '';
  public columnsP: ColumnsTable[];
  @Input()kidSelected: KidDto;

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
    this.httpClient.get<TaskDto[]>(environment.apiUrl + '/children/' + this.kidSelected.id + '/tasks')
      .pipe(
        map(arrayTasks =>
          arrayTasks.map(task => {
            return new TaskDto(task.description, task.key, task.name, task.status, task.taskPoint);
          })
        )
      ).subscribe(
        data => {
          console.log(data);
          this.tasks = data;
          this.tasks$.next(this.tasks);
        }
      );
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
