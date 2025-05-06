import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, InicioComponent],
  template: `<app-inicio/>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculadoratfg';
}
