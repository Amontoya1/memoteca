import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPensamientoComponent } from './edit-pensamiento.component';

describe('EditPensamientoComponent', () => {
  let component: EditPensamientoComponent;
  let fixture: ComponentFixture<EditPensamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPensamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPensamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
