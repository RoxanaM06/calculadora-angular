import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Aplicación Calculadora';
  resultadoPadre: number = 0;

  /*
  operandoA = 0;
  operandoB = 0
  resultado = 0;

  sumar() {
    this.resultado = this.operandoA + this.operandoB;
  }
  */

  procesarResultado(resultado:number) {
    this.resultadoPadre = resultado;
  }
}
