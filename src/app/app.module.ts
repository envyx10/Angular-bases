import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [ /* Cualquier cosa terminado en Module va en los imports */
    BrowserModule,
    CounterModule,
    HeroesModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
