import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements DoCheck {
  // Esto es para saber si el modo oscuro está activado o no
  // y sirve para cambiar las imagenes de inicio.component.html
  isDarkMode = false;
  ngDoCheck(): void {
    this.isDarkMode = document.documentElement.classList.contains('dark-mode');
  }
}
