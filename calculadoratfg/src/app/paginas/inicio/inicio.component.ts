import { Component, DoCheck } from '@angular/core';
import { CalculadoraComponent } from '../../components/calculadora/calculadora.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CalculadoraComponent],
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
