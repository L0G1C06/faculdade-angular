import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculoMediaComponent } from './calculo-media/calculo-media.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculoMediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ 
      { path: 'calculo-media', component: CalculoMediaComponent }, 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
