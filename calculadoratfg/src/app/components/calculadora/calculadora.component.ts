import { Component, OnInit } from '@angular/core';
import { MensajeErrorComponent } from '../mensaje-error/mensaje-error.component';
import { CommonModule } from '@angular/common'; // Importo CommonModule para usar ngIf y ngFor en el template
@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [MensajeErrorComponent, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  operacion: string = ''; 
  resultado: string = '0'; 
  mensajeError: string = ''; // Usado para mostrar errores en <app-mensaje-error>

  reconocimientoVoz: any; // Variable para el reconocimiento de voz

  ngOnInit(): void {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;

    if (SpeechRecognition) {
      this.reconocimientoVoz = new SpeechRecognition();
      this.reconocimientoVoz.lang = 'es-ES';
      this.reconocimientoVoz.continuous = false;
      this.reconocimientoVoz.interimResults = false;

      this.reconocimientoVoz.onresult = (event: any) => {
        const vozTexto = event.results[0][0].transcript;
        this.operacion = this.convertirTextoOperacion(vozTexto);
        this.mensajeError = '';
        this.calcular();
      };

      this.reconocimientoVoz.onerror = (event: any) => {
        this.mensajeError = 'Error al reconocer la voz. Vuelve a intentarlo más tarde.';
      };
    } else {
      this.mensajeError = 'Lo siento, este navegador no soporta el reconocimiento de voz.';
    }
  }



  agregarValor(valor: string) {
    this.operacion += valor;
    this.mensajeError = '';
  }

  limpiar() {
    this.operacion = '';
    this.resultado = '0';
    this.mensajeError = '';
  }

  calcular() {
    try {
      try {
        this.resultado = Function('"use strict"; return (' + this.operacion + ')')().toString();
      } catch (error) {
        this.mensajeError = 'Operación no válida';
      }
      this.mensajeError = '';
    } catch {
      this.resultado = '0';
      this.mensajeError = 'No se puede hacer la operación';
    }
  }



  microActivo: boolean = false;

  escucharVoz() {
    if (!this.reconocimientoVoz) {
      this.mensajeError = 'Lo sentimos, el reconocimiento de voz no está disponible';
      return;
    }

    if (!this.microActivo) {
      this.reconocimientoVoz.start();
      this.microActivo = true;
      this.mensajeError = '';
    } else {
      this.reconocimientoVoz.stop();
      this.microActivo = false;
      // Esto lo hago para forzar el cálculo:
      this.calcular();
    }
  }


// Método para convertir el texto de la voz a una operación matemática (convierte los operadores de texto a símbolos)
  convertirTextoOperacion(texto: string): string {
    return texto
      .toLowerCase()
      .replace(/más/g, '+')
      .replace(/menos/g, '-')
      .replace(/por/g, '*')
      .replace(/entre/g, '/')
      .replace(/ /g, '');
  }
}

