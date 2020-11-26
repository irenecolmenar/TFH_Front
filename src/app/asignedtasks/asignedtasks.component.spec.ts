import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignedtasksComponent } from './asignedtasks.component';

describe('AsignedtasksComponent', () => {
  let component: AsignedtasksComponent;
  let fixture: ComponentFixture<AsignedtasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignedtasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignedtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
