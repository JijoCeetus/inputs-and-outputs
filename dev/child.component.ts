import { Component, EventEmitter } from  'angular2/core';

@Component({
    selector: 'child',
    template: `
    <h2>child</h2>
    <p>value entered in parent component:{{parentValue}}</p>
    <input type="text" #childInput (keyup)="onChange(childInput.value)"/>
    `
    ,
    inputs: ['parentValue'],
    outputs: ['childChanged']

})

export class ChildComponent {
    parentValue: string;
    childChanged = new EventEmitter<string>();

    onChange(value:string){
        console.log("chiled")
this.childChanged.emit(value);
    }
}