import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Moto } from '../caracteristicas-motos/caracteristicas-motos.component';

@Component({
  selector: 'app-carrusel-motos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './carrusel-motos.component.html',
  styleUrls: ['./carrusel-motos.component.css']
})
export class CarruselMotosComponent implements OnInit {
  motos: Moto[] = [];
  currentIndex: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<Moto[]>('motos.json').subscribe({
      next: (data) => {
        this.motos = data;

        if (this.currentIndex >= this.motos.length) {
          this.currentIndex = 0;
        }
      },
      error: (err) => console.error('Error al cargar motos.json:', err)
    });
  }

  next(): void {
    if (this.motos.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.motos.length;
    }
  }

  prev(): void {
    if (this.motos.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.motos.length) % this.motos.length;
    }
  }
}
