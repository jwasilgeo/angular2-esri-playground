import { Component } from '@angular/core';

@Component({
    selector: 'intro',
    template: 
        `
        <div>
            Features
            <ul>
                <li><a href="https://js.arcgis.com/">Esri 4.x JSAPI</a> for 2D and 3D mapping</li>
                <li><a href="https://github.com/Esri/esri-system-js">esri-system-js</a> for loading Esri modules in SystemJS</li>
                <li>Angular 2 app with routing
                    <ul>
                        <li>MapView and SceneView components</li>
                        <li>Custom view coordination service to keep SceneView components in sync</li>
                        <li>Vector GIS analysis in the browser</li>
                    </ul>
                </li>
                <li>and <a href="http://picnicss.com/">Picnic CSS</a> for the good looks</li>
            </ul>
        </div>
        `,
})
export class IntroComponent {
    constructor() { }
}
