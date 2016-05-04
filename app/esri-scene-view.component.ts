import { Component, ElementRef, Output, EventEmitter } from 'angular2/core';
import { SimpleMapService } from './map.service';
import { ViewCoordinationService } from './view-coordination.service';
import { Map, SceneView } from 'esri-mods';

@Component({
    selector: 'esri-scene-view',
    template: '<div></div>',
    providers: [SimpleMapService]
})
export class EsriSceneViewComponent {
    @Output() viewCreated = new EventEmitter();

    view: any = null;

    constructor(
        private _mapService: SimpleMapService,
        private _viewCoordinationService: ViewCoordinationService,
        private elRef: ElementRef
    ) {}

    ngOnInit() {
        this.view = new SceneView({
            container: this.elRef.nativeElement.firstChild,
            map: this._mapService.map,
            zoom: this._viewCoordinationService.zoom,
            center: this._viewCoordinationService.center,
            rotation: this._viewCoordinationService.rotation
        })

        this.view.then(function(view) {
            this.viewCreated.next(view);
        }.bind(this));

        this.view.watch('camera', function(newVal, oldVal, propertyName) {
            this._viewCoordinationService.setValue(newVal, propertyName);
        }.bind(this));

    }

    syncCamera(delaySync:boolean) {
        if (delaySync) {
            this.view.animateTo(this._viewCoordinationService.camera, {
                delay: 700
            });
        } else {
            this.view.camera = this._viewCoordinationService.camera;
        }
    }
}
