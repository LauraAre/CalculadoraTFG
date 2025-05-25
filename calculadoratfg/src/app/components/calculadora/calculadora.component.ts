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
      this.reconocimientoVoz.lang = 'es-ES'; // Idioma en español
      this.reconocimientoVoz.continuous = false;
      this.reconocimientoVoz.interimResults = false; // No quiero resultados intermedios

      this.reconocimientoVoz.onresult = (event: any) => {
        const vozTexto = event.results[0][0].transcript; // Obtengo el texto sacado de mi API
        console.log('Texto escuchado por la API:', vozTexto);

        if (/^\d+\s+\d+$/.test(vozTexto)) {
          this.operacion = vozTexto.replace(/\s+/, '/');
        } else {
          this.operacion = this.convertirTexto(vozTexto); // Convierto el texto de voz a una operación matemática
        }

        this.mensajeError = '';
        this.calcular();
      };

      //Manejo de errores, en el caso de que no se pueda reconocer la voz:
      this.reconocimientoVoz.onerror = (event: any) => {
        this.mensajeError = 'Error al reconocer la voz. Vuelve a intentarlo más tarde.';
      };
    } else {
      this.mensajeError = 'Lo siento, este navegador no soporta el reconocimiento de voz.';
    }
  }

  // Agrego los números o los símbolos a la operación (Botones 0-9, +, -, *, /)
  agregarValor(valor: string) {
    this.operacion += valor;
    this.mensajeError = '';
  }

  // Borrar los datos de la última operación (Botón C)
  borrarDatos() {
    this.operacion = '';
    this.resultado = '0';
    this.mensajeError = '';
  }

  calcular() {
    try {
      try {
        this.resultado = Function('"use strict"; return (' + this.operacion + ')')().toString();
      } catch (error) {
        this.mensajeError = 'Operación no válida'; //  Si la operación no es válida, se muestra un mensaje de error
      }
      this.mensajeError = '';
      this.decirResultado(this.resultado);
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
    }
  }


  // Convierto los operadores de texto escuchados, a símbolos matemáticos
  convertirTexto(texto: string): string {
    return texto
      .toLowerCase()
      .replace(/más/g, '+')
      .replace(/menos/g, '-')
      .replace(/por/g, '*')
      .replace(/entre/g, '/')
      .replace(/ /g, '');
  }


  decirResultado(resultado: string) {
    if ('speechSynthesis' in window) {
      const mensaje = new SpeechSynthesisUtterance(`El resultado es ${resultado}`);
      mensaje.lang = 'es-ES'; // Idioma de la voz
      mensaje.rate = 1; // Velocidad de la voz
      mensaje.pitch = 1; // Tono de la voz
      window.speechSynthesis.speak(mensaje); // Dice el mensaje (la constante de arriba)
    } else {
      this.mensajeError = 'Lo sentimos, tu navegador no puede hablar.';
    }
  }
}