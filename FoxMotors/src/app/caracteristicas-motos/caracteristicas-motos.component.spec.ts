import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasMotosComponent } from './caracteristicas-motos.component';

describe('CaracteristicasMotosComponent', () => {
  let component: CaracteristicasMotosComponent;
  let fixture: ComponentFixture<CaracteristicasMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicasMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
