import { Map, GraphicsLayer, VectorTileLayer } from 'esri-mods';
import {Injectable} from 'angular2/core';

@Injectable()
export class MapService {
    map: null;
    constructor() {
        this.map = new Map({
            basemap: 'satellite'
            // layers: [
            //     new VectorTileLayer({
            //         url: 'http://basemaps.arcgis.com/arcgis/rest/services/World_Basemap/VectorTileServer'
            //     }),
            //     new GraphicsLayer();
            // ]
        });
    }
}
