import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-default',
  templateUrl: './calculadora-default.component.html',
  styleUrl: './calculadora-default.component.css'
})
export class CalculadoraDefaultComponent {
  x: number = 0;
  y: number = 0;
  operacao: string = "";
  resultado: number | string = "";

  constructor() { }

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.x + this.y;
        break;
      case 'subtracao':
        this.resultado = this.x - this.y;
        break;
      case 'multiplicacao':
        this.resultado = this.x * this.y;
        break;
      case 'divisao':
        if (this.y !==  0) {
          this.resultado = this.x / this.y;
        } else {
          this.resultado = 'Erro: Divisão por zero';
        }
        break;
      default:
        this.resultado = 'Operação inválida';
    }
  }
}
