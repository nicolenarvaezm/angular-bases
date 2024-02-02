import { Component, Input } from '@angular/core';
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

}
