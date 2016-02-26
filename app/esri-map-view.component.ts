import { Component, ElementRef, Input, Output, EventEmitter } from 'angular2/core';
import { MapService } from './map.service';
import { Map, MapView } from 'esri-mods';

@Component({
    selector: 'esri-map-view',
    template: '<div></div>',
    // template: '<div (zoom)="zoom" (center)="center" (rotation)="rotation"></div>',
    providers: [MapService]
})
export class EsriMapViewComponent {
    @Input() zoom: number;
    // @Input() center: number[];
    @Input() centerLng: number;
    @Input() centerLat: number;
    @Input() rotation: number;

    @Output() viewCreated = new EventEmitter();

    view: any = null;

    constructor(
        private _mapService: MapService,
        private elRef: ElementRef
    ) {}

    ngOnInit() {
        console.log(this.zoom, this.center, this.rotation);

        this.view = new MapView({
            container: this.elRef.nativeElement.firstChild,
            map: this._mapService.map,
            zoom: this.zoom,
            center: [this.centerLng, this.centerLat],
            // center: this.center,
            rotation: this.rotation
        });

        this.view.then(function(view) {
            this.viewCreated.next(view);
        }.bind(this));

        // this.view.watch('zoom,center,rotation', function(newVal, oldVal, propertyName) {
        //     this._viewCoordinationService.setValue(newVal, propertyName);
        // }.bind(this));
    }
}
