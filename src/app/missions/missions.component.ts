import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ColumnsTable } from '../table-list/table-list.component';
import { TableListComponent } from '../table-list/table-list.component';
import { environment } from '../../environments/environment';
import { KidDto } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.less']
})
export class MissionsComponent implements OnInit {

  public missions: missionDto[];
  public missions$: BehaviorSubject<missionDto[]>;
  public routeToP = '';
  public columnsP: ColumnsTable[];
  @Input()kidSelected: KidDto;

  constructor(
    private httpClient: HttpClient
  ) {
    this.missions = [];
    this.missions$ = new BehaviorSubject<missionDto[]>(this.missions);
    this.routeToP = '';
    this.columnsP = [
      { id: 'name', name: 'Nombre', pos: 'left', display: 'all' },
      { id: 'description', name: 'Descripción', pos: 'left', display: 'all' },
      { id: 'missionPoint', name: 'TFCoins', pos: 'left', display: 'all' }];
  }

  ngOnInit(): void {
    this.updateTable();
  }

  updateTable() {
    this.httpClient.get<missionDto[]>(environment.apiUrl + '/goals/user/' + this.kidSelected.id )
      .pipe(
        map(arraymissions =>
          arraymissions.map(mission => {
            return new missionDto(mission.description, mission.key, mission.name, mission.status, mission.goalUser.filter(p => p.key===this.kidSelected.id)[0].goalPoint, mission.goalUser);
          })
        )
      ).subscribe(
        data => {
          this.missions = data;
          this.missions$.next(this.missions);
        }
      );
  }
}

export class missionDto {
  public description: string;
  public key: string;
  public name: string;
  public status: string;
  public missionPoint: number;
  public goalUser: goalUserDto[];

  constructor(
    _description: string,
    _key: string,
    _name: string,
    _status: string,
    _missionPoint: number,
    _goalUser: goalUserDto[]
  ) {
    this.description = _description;
    this.key = _key;
    this.name = _name;
    this.status = _status;
    this.missionPoint = _missionPoint;
    this.goalUser = _goalUser;
  }
}

export class goalUserDto {
  public key: string; 
  public goalPoint:number;

  constructor(
    _key: string,
    _goalPoint: number
  ) {
    this.key = _key;
    this.goalPoint = _goalPoint;
  }
}
