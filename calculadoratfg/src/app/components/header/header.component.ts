import { Component, DoCheck } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModeComponent } from '../theme-mode/theme-mode.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ThemeModeComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
  // Esto es para saber si el modo oscuro está activado o no
  // y sirve para cambiar las imagenes dependiendo del modo (oscuro o claro)
  isDarkMode = false;
  ngDoCheck(): void {
    this.isDarkMode = document.documentElement.classList.contains('dark-mode');
  }


  // Variables para el menú hamburguesa
  menuOpen = false; // Variable para controlar el estado del menú hamburguesa

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Desplegar o plegar el menú 
  }
}


