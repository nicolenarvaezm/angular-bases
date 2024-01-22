import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    Contador: {{counter}}
    <button (click)="incrementar(+1)">+1</button>
    <button (click)="reiniciar()">Reiniciar</button>
    <button (click)="incrementar(-1)">-1</button>
    `
    
})

export class counterComponent{
    public title = 'hola!';
    public counter: number = 10;

    incrementar(value: number):void{
        this.counter += value;
    }

    reiniciar():void{
        this.counter = 10;
    }
}