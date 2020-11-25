import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'TFH-Front';
  displayedColumns: string[] = ['position', 'name', 'progress',];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  progress: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse', progress: 1.0079},
  { position: 2, name: 'Helium', progress: 4.0026},
  { position: 3, name: 'Lithium', progress: 6.941},
  { position: 4, name: 'Beryllium', progress: 9.0122},
  { position: 5, name: 'Boron', progress: 10.811},
  { position: 6, name: 'Carbon', progress: 12.0107},
  { position: 7, name: 'Nitrogen', progress: 14.0067},
  { position: 8, name: 'Oxygen', progress: 15.9994},
  { position: 9, name: 'Fluorine', progress: 18.9984},
  { position: 10, name: 'Neon', progress: 20.1797},
];

