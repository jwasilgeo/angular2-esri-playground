import { Component, ElementRef, Input, Output, EventEmitter } from 'angular2/core';
import { AnalysisMapService } from './map.service';
import { Map, MapView } from 'esri-mods';

@Component({
    selector: 'esri-map-view',
    template: '<div></div>',
    providers: [AnalysisMapService]
})
export class EsriMapViewComponent {
    @Input() zoom: number;
    @Input() centerLng: number;
    @Input() centerLat: number;
    @Input() rotation: number;

    @Output() viewCreated = new EventEmitter();

    view: any = null;

    constructor(
        private _mapService: AnalysisMapService,
        private elRef: ElementRef
    ) {}

    ngOnInit() {
        this.view = new MapView({
            container: this.elRef.nativeElement.firstChild,
            map: this._mapService.map,
            zoom: this.zoom,
            center: [this.centerLng, this.centerLat],
            rotation: this.rotation
        });

        this.view.then(function(view) {
            this.viewCreated.next(view);
        }.bind(this));
    }
}
