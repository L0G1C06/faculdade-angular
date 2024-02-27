import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculoMediaComponent } from './calculo-media/calculo-media.component';
import { CalculadoraDefaultComponent } from './calculadora-default/calculadora-default.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculoMediaComponent,
    CalculadoraDefaultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ 
      { path: 'calculo-media', component: CalculoMediaComponent }, 
      { path: 'calculadora-default', component: CalculadoraDefaultComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
