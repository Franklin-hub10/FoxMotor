import { Routes } from '@angular/router';
import { CaracteristicasMotosComponent } from './caracteristicas-motos/caracteristicas-motos.component';
import { CarruselMotosComponent } from './carrusel-motos/carrusel-motos.component';
import { HomeComponent } from './home/home.component';
import { Pagina404Component } from './pagina404/pagina404.component';


export const routes: Routes = [
    {
        path: 'catalogo',
        component: CaracteristicasMotosComponent
    },
    {
        path: 'carousel',
        component: CarruselMotosComponent
    },
    {
        path: 'home',
        component:HomeComponent
    },

    {
    
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'**',
        component:Pagina404Component
    }
];
