import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePensamientoComponent } from './delete-pensamiento.component';

describe('DeletePensamientoComponent', () => {
  let component: DeletePensamientoComponent;
  let fixture: ComponentFixture<DeletePensamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePensamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePensamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
