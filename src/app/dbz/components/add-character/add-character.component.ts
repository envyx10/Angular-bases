import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,

  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {

    console.log(this.character);

    // Si el nombre del personaje está vacío, no hacemos nada
    // Esto es una validación para evitar emitir un personaje sin nombre.
    if (this.character.name.length === 0) return;

    // Emitimos el personaje al componente padre

    // Es un EventEmitter que se utiliza para emitir eventos desde este componente
    // hijo hacia el componente padre. En este caso,
    // se está emitiendo el objeto character al componente padre
    this.onNewCharacter.emit({...this.character});


    this.character.name = '';
    this.character.power = 0;
  }


}
