import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo-media',
  templateUrl: './calculo-media.component.html',
  styleUrl: './calculo-media.component.css'
})
export class CalculoMediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  media: number | null = null;

  constructor() { }

  calcularMedia(): void {
    if (this.ac1 !== undefined && this.ac2 !== undefined && this.ag !== undefined && this.af !== undefined) {
      this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    } else {
      this.media = null;
    }
  }
}
