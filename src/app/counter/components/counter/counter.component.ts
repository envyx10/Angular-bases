import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <h3>Counter: {{counter}} </h3>
    <hr>
    <button (click)="increaseBy(+1)"> +1 </button>
    <button (click)="resetCounter()"> reset </button>
    <button (click)="increaseBy(-1)"> -1 </button>

  `
,
standalone: false,

})

// Método donde nos encargamos de la lógica
export class CounterComponent {

  public counter: number = 0;

  /**
   * Se encarga de Incrementar el contador
   * @param value
   */
  increaseBy(value: number):void {
    this.counter += value;
  }

  /**
   * Se encarga de decrementar el contador
   */
  resetCounter():void{
    this.counter = 0
  }


}
