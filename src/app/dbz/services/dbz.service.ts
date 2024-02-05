import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interfeces';

@Injectable({providedIn: 'root'})

export class DbzService {

    public characters: character[] = [{
        name: 'Krilin',
        power: 1000
    },{
        name: 'Goku',
        power: 9500
    }];

    onNewCharacter(character:character):void{
        this.characters.push(character);
    }

    onDeleteCharacter(index:number){
        this.characters.splice(index, 1);
    }

    
}