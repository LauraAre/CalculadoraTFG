import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importo CommonModule para usar ngIf y ngFor en el template
@Component({
  selector: 'app-mensaje-error',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './mensaje-error.component.html',
  styleUrls: ['./mensaje-error.component.scss']
})
export class MensajeErrorComponent {
  @Input() mensaje: string = '';
}
