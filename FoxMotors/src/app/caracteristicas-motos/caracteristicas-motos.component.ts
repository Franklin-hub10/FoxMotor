import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

export interface Moto {
  marca: string;
  modelo: string;
  cilindraje: number;
  tipo: string;
  precio_aproximado: number;
  imagen?:String;
}


@Component({
  selector: 'app-caracteristicas-motos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './caracteristicas-motos.component.html',
  styleUrls: ['./caracteristicas-motos.component.css']
})
export class CaracteristicasMotosComponent {
  motos: Moto[] = [];
  selectedMoto: Moto | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Moto[]>('motos.json').subscribe({
      next: (data) => {
        this.motos = data;
        console.log('Datos recibidos:', data);
      },
      error: (err) => console.error('Error al cargar motos.json:', err)
    });
  }

  openModal(moto: Moto): void {
    this.selectedMoto = moto;
  }

  closeModal(): void {
    this.selectedMoto = null;
  }
}

