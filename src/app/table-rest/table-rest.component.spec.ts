import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRestComponent } from './table-rest.component';

describe('TableRestComponent', () => {
  let component: TableRestComponent;
  let fixture: ComponentFixture<TableRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
