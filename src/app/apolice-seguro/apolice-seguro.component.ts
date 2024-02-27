import { Component } from '@angular/core';
import { SrvRecord } from 'dns';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrl: './apolice-seguro.component.css'
})
export class ApoliceSeguroComponent {
  nomeSegurado: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;
  valorApolice: number | null = null;

  calcularValorApolice() {
    if (this.valorAutomovel) {
      if (this.sexo === 'masculino' && this.idade <=  25) {
        this.valorApolice = this.valorAutomovel *  0.15;
      } else if (this.sexo === 'masculino' && this.idade >  25) {
        this.valorApolice = this.valorAutomovel *  0.10;
      } else {
        this.valorApolice = this.valorAutomovel *  0.08;
      }
    }
  }
}
