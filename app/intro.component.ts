import { Component } from 'angular2/core';

@Component({
    selector: 'intro',
    template: 
        `
        <div>
            Features
            <ul>
                <li>Angular 2 with routing</li>
                <li><a href="https://developers.arcgis.com/javascript/beta/">Esri 4.x JSAPI</a></li>
                <li>Custom view coordination service to help keep views in sync</li>
                <li><a href="http://picnicss.com/">Picnic CSS</a></li>
            </ul>
        </div>
        `,
})
export class IntroComponent {
    constructor() { }
}
