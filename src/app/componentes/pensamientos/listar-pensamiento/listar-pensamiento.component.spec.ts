import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamientoComponent } from './listar-pensamiento.component';

describe('ListarPensamientoComponent', () => {
  let component: ListarPensamientoComponent;
  let fixture: ComponentFixture<ListarPensamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPensamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPensamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
