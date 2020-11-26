import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

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

    this.kids = [
      {
        id: 1,
        name: 'clara',
        surname: 'del monte1'
      },
      {
        id: 2,
        name: 'clara',
        surname: 'del monte2'
      },
      {
        id: 3,
        name: 'clara',
        surname: 'del monte3'
      },
    ]
    // this.httpClient.get<KidDto[]>("METE")
    //   .subscribe(
    //     data => { this.kids = data; }
    //   );
  }

}

export interface KidDto {
  id: number;
  name: string;
  surname: string;
};
