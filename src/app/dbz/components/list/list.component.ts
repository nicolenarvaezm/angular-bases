import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/character.interfeces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: character[]= [{
    name: 'Trunk',
    power:10
  }]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index:number):void{
    this.onDelete.emit(index);
  }

}
