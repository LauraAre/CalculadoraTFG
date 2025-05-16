import { Component, DoCheck } from '@angular/core';
@Component({
  selector: 'app-como-funciona-cards',
  standalone: true,
  imports: [],
  templateUrl: './como-funciona-cards.component.html',
  styleUrl: './como-funciona-cards.component.scss'
})
export class ComoFuncionaCardsComponent implements DoCheck {
  // Esto es para saber si el modo oscuro está activado o no
  // y sirve para cambiar las imagenes de inicio.component.html
  isDarkMode = false;
  ngDoCheck(): void {
    this.isDarkMode = document.documentElement.classList.contains('dark-mode');
  }

}
