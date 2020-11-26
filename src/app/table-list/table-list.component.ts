import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.less']
})
export class TableListComponent implements OnInit {

  public dataTable: MatTableDataSource<any> = new MatTableDataSource();
  public columnsConfig: string[];

  public _allTypeColumns = ['visible', 'updatedDate', 'type', 'methodBill', 'valueBill', '_lastUpdate', '_totalValue', 'event', 'name', 'surname', 'editable', 'eventCompany'];

  @Input() columns: ColumnsTable[];
  @Input() list: Observable<any[]>;
  @Input() routeTo: string;

  @ViewChild('tableSort') tableSort: MatSort;
  @ViewChild(MatPaginator)
  set paginator(value: MatPaginator) {
    this.dataTable.paginator = value;
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.columnsConfig = this.columns.map(a => a.id);
    this.dataTable.sort = this.tableSort;
    this.list.subscribe(data => { this.dataTable.data = data; });
  }

  sortData(event: Sort) {
    this.dataTable.data = this.dataTable.data.sort((a, b) => {
      const isAsc = event.direction === 'asc';
      switch (event.active) {
        case 'name': return this.compare(a.name.toLocaleLowerCase(), b.name.toLocaleLowerCase(), isAsc);
        case 'allname': return this.compare(a.surname.toLocaleLowerCase() + ', ' + a.name.toLocaleLowerCase(),
          b.surname.toLocaleLowerCase() + ', ' + b.name.toLocaleLowerCase(), isAsc);
        case 'updatedDate': return this.compare(a.updatedDate, b.updatedDate, isAsc);
        case 'eventCompany': return this.compare(a.company.name, b.company.name, isAsc);
        case 'valueBill': return this.compare(a.value, b.value, isAsc);
        default: return this.compare(a[event.active], b[event.active], isAsc);;
      }
    });
  }

  compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataTable.filter = filterValue.trim().toLowerCase();
  }
}

export interface ColumnsTable {
  id: string;
  name: string;
  pos: string;
  display: string;
};
