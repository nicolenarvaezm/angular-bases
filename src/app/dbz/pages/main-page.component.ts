import { Component, OnInit } from '@angular/core';
import { character } from '../interfaces/character.interfeces';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
   
    public characters: character[] = [{
        name: 'Krilin',
        power: 1000
    },{
        name: 'Goku',
        power: 9500
    }];

    onNewCharacter(character:character):void{
        
        console.log(character)
    }

}