import { Component } from  'angular2/core';

@Component({
    selector: 'childs',
    template: `
    <h2<child</h2>
    <p>value entered in parent component</p>
    <input type="text" />
    `,
    inputs: ['parentValue'],
    
})

export class ChildComponent {
    parentValue: string;
}