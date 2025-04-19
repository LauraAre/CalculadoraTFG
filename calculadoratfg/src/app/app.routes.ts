import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AccesibilidadComponent } from './paginas/accesibilidad/accesibilidad.component';
import { ComoFuncionaComponent } from './paginas/como-funciona/como-funciona.component';
export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'accesibilidad', component: AccesibilidadComponent},
    {path: 'como-funciona', component: ComoFuncionaComponent},
    { path: '**', redirectTo: '' }
];
