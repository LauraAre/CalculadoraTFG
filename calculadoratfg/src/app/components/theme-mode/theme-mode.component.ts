import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-mode',
  standalone: true,
  templateUrl: './theme-mode.component.html',
  styleUrls: ['./theme-mode.component.scss']
})
export class ThemeModeComponent {
  esModoOscuro = false;

  constructor() {
    const guardarTema = localStorage.getItem('theme');
    this.esModoOscuro = guardarTema === 'dark';
    this.aplicarTema();
  }

  cambiarTema() {
    this.esModoOscuro = !this.esModoOscuro;
    localStorage.setItem('theme', this.esModoOscuro ? 'dark' : 'light');
    this.aplicarTema();
  }

  private aplicarTema() {
    const root = document.documentElement;
    root.classList.toggle('dark-mode', this.esModoOscuro);
    root.classList.toggle('light-mode', !this.esModoOscuro);
  }
}


