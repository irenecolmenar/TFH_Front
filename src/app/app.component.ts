import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

}
