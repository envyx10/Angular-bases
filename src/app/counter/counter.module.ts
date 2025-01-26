import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
  declarations:[ /* Con esto declaramos que podemos trabajar dentro de la misma agrupacion de carpetas */
    CounterComponent
  ],
  exports:[ /* Para especificar al mundo exterior que puede consumir este counterCompont */
    CounterComponent
  ]

})
export class CounterModule {}
