import { Component } from 'angular2/core';

@Component({
    selector: 'intro',
    template: 
        `
        <div>
            <ul>
                <li>Angular 2 with routing</li>
                <li>Esri 4.x JSAPI</li>
                <li>View coordination service to start views with previous settings</li>
                <li>Material Design Lite</li>
            </ul>
        </div>
        `,
})
export class IntroComponent {
    constructor() { }
}
