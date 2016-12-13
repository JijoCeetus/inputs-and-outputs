import {Component} from 'angular2/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'app',
    template: `
        <div class="parent">
            <h1>parent</h1>
            <p>Value entered in child component:</p>
            <input type="text" />
            <div class="child">
                <childs></childs>
            </div>
        </div>
    `,
})
export class AppComponent {

}