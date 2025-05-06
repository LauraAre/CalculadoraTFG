import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ComoFuncionaComponent } from './paginas/como-funciona/como-funciona.component';
import { AccesibilidadComponent } from './paginas/accesibilidad/accesibilidad.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'como-funciona', component: ComoFuncionaComponent },
  { path: 'accesibilidad', component: AccesibilidadComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
