import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Aplicación Calculadora';
  operandoA = 0;
  operandoB = 0
  resultado = 0;

  sumar() {
    this.resultado = this.operandoA + this.operandoB;
  }
}
