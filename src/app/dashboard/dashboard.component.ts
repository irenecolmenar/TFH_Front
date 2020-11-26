import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  public title: string;
  public kids: KidDto[];

  constructor(
    private httpClient: HttpClient
  ) {
    this.title = 'TFH-Front';
    this.kids = [];
  }

  ngOnInit(): void {
    this.updateKids();
  }

  /**
   * actualiza los datos de los niños.
   */
  updateKids() {
    this.httpClient.get<KidDto[]>(environment.apiUrl + "/parent/Angeles/children")
      .subscribe(
        data => { this.kids = data; }
      );
  }
}

export interface KidDto {
  id: string,
  name: string,
  surname: string,
  age: number,
  chatbotId: string,
  totalPoint: number
};
