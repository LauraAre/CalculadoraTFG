import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ComoFuncionaComponent } from './paginas/como-funciona/como-funciona.component';
import { AccesibilidadComponent } from './paginas/accesibilidad/accesibilidad.component';
import { MensajeErrorComponent } from './components/mensaje-error/mensaje-error.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InicioComponent,
    ComoFuncionaComponent,
    AccesibilidadComponent,
    MensajeErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }