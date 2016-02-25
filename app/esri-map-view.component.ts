import { Component, ElementRef, Output, EventEmitter } from 'angular2/core';
import { MapService } from './map.service';
import { ViewCoordinationService } from './view-coordination.service';
import { Map, MapView } from 'esri-mods';

@Component({
    selector: 'esri-map-view',
    template: '<div></div>',
    providers: [MapService/*, ViewCoordinationService*/]
})
export class EsriMapViewComponent {
    @Output() viewCreated = new EventEmitter();

    view: null;

    constructor(
        private _mapService: MapService,
        private _viewCoordinationService: ViewCoordinationService,
        private elRef: ElementRef
    ) {}

    ngOnInit() {
        this.view = new MapView({
            container: this.elRef.nativeElement.firstChild,
            map: this._mapService.map,
            zoom: this._viewCoordinationService.zoom,
            center: this._viewCoordinationService.center,
            rotation: this._viewCoordinationService.rotation
        });

        this.view.then(function(view) {
            this.viewCreated.next(view);
        }.bind(this));

        this.view.watch('zoom,center,rotation', function(newVal, oldVal, propertyName) {
            this._viewCoordinationService.setValue(newVal, propertyName);
        }.bind(this));
    }
}
