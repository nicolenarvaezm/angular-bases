import { Component, OnInit } from '@angular/core';
import { character } from '../interfaces/character.interfeces';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
   
    constructor( public dbzService: DbzService){
        
    }

}