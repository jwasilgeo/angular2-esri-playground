import { Map, FeatureLayer, GraphicsLayer } from 'esri-mods';
import {Injectable} from 'angular2/core';

@Injectable()
export class MapService {
    map: null;
    constructor() {
        this.map = new Map({
            basemap: 'satellite'
            layers: [
                new GraphicsLayer({
                    id: 'analysisLayer'
                }),
                new FeatureLayer({
                    url: '//services.arcgis.com/BG6nSlhZSAWtExvp/arcgis/rest/services/World_Volcanoes/FeatureServer/0',
                    id: 'volcanoesLayer'
                });
            ]
        });
    }
}
