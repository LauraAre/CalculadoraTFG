import { Component } from '@angular/core';
import { ComoFuncionaCardsComponent } from '../../components/como-funciona-cards/como-funciona-cards.component';
@Component({
  selector: 'app-como-funciona',
  standalone: true,
  imports: [ComoFuncionaCardsComponent],
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.scss']
})
export class ComoFuncionaComponent {}
