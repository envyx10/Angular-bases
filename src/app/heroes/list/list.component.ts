import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: String[] = ['SpiderMan' , 'IronMan' , 'Hulk' , 'She Hulk' , 'Thor'];
  public deleteHero?: String;

  public removeLastHero(): void{

    this.deleteHero = this.heroNames.pop();

  }






}
