import { Component } from 'angular2/core';

@Component({
    selector: 'intro',
    template: 
        `
        <div>
            Features
            <ul>
                <li><a href="https://developers.arcgis.com/javascript/beta/">Esri 4.x JSAPI</a> for 2D and 3D mapping</li>
                <li>Angular 2 with routing
                    <ul>
                        <li>Map view and scene view components</li>
                        <li>Custom view coordination service to keep scene views in sync</li>
                        <li>Vector GIS analysis in the browser</li>
                    </ul>
                </li>
                <li><a href="http://picnicss.com/">Picnic CSS</a></li>
            </ul>
        </div>
        `,
})
export class IntroComponent {
    constructor() { }
}
