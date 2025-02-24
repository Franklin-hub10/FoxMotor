import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselMotosComponent } from './carrusel-motos.component';

describe('CarruselMotosComponent', () => {
  let component: CarruselMotosComponent;
  let fixture: ComponentFixture<CarruselMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
