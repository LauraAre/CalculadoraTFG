import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-accesibilidad',
  standalone: true,
  imports: [],
  templateUrl: './accesibilidad.component.html',
  styleUrls: ['./accesibilidad.component.scss']
})
export class AccesibilidadComponent implements DoCheck {
  // Esto es para saber si el modo oscuro está activado o no
  // y sirve para cambiar las imagenes dependiendo del modo
  isDarkMode = false;
  ngDoCheck(): void {
    this.isDarkMode = document.documentElement.classList.contains('dark-mode');
  }
}
