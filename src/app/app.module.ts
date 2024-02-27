import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculoMediaComponent } from './calculo-media/calculo-media.component';
import { CalculadoraDefaultComponent } from './calculadora-default/calculadora-default.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculoMediaComponent,
    CalculadoraDefaultComponent,
    CadastroAlunoComponent,
    ApoliceSeguroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ 
      { path: 'calculo-media', component: CalculoMediaComponent }, 
      { path: 'calculadora-default', component: CalculadoraDefaultComponent},
      { path: 'cadastro-aluno', component: CadastroAlunoComponent},
      { path: 'apolice-seguro', component: ApoliceSeguroComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
