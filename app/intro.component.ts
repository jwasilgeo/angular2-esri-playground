import { Component } from 'angular2/core';

@Component({
    selector: 'intro',
    template: 
        `
        <div>
            Features
            <ul>
                <li>Angular 2 with routing</li>
                <li>Esri 4.x JSAPI</li>
                <li>View coordination service to keep views in sync</li>
                <li>Picnic CSS</li>
            </ul>
        </div>
        `,
})
export class IntroComponent {
    constructor() { }
}
