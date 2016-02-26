// import { Map, GraphicsLayer, VectorTileLayer } from 'esri-mods';
import {Injectable} from 'angular2/core';

@Injectable()
export class ViewCoordinationService {
    camera: null;
    center: null;
    zoom: null;
    rotation: null;

    // sceneView: null;

    constructor () {
        this.zoom = 15;
        this.center = [19.937, 50.061];
        this.rotation = 0;
    }

    /*setSceneView(view) {
        this.sceneView = view;
    }*/

    setValue(newVal: any, propertyName: string) {
        if (propertyName === 'center') {
            newVal = [newVal.longitude, newVal.latitude]
        }
        this['_set' + propertyName](newVal);
    }
    _setcamera(val: number) {
        this.camera = val;
    }
    _setzoom(val: number) {
        this.zoom = val;
    }
    _setcenter(lngLat: number[]) {
        this.center = lngLat;
    }
    _setrotation(val: number) {
        this.rotation = val;
    }
}
