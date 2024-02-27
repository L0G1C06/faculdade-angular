import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculoMediaComponent } from './calculo-media/calculo-media.component';
import { CalculadoraDefaultComponent } from './calculadora-default/calculadora-default.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculoMediaComponent,
    CalculadoraDefaultComponent,
    CadastroAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ 
      { path: 'calculo-media', component: CalculoMediaComponent }, 
      { path: 'calculadora-default', component: CalculadoraDefaultComponent},
      { path: 'cadastro-aluno', component: CadastroAlunoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
