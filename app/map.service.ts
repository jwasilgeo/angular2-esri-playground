import { Injectable } from '@angular/core';
import Map from 'esri/Map';
import FeatureLayer from 'esri/layers/FeatureLayer';
import GraphicsLayer from 'esri/layers/GraphicsLayer';

@Injectable()
export class SimpleMapService {
    map: any = null;
    constructor() {
        this.map = new Map({
            basemap: 'satellite'
        });
    }
}

@Injectable()
export class AnalysisMapService {
    map: any = null;
    constructor() {
        this.map = new Map({
            basemap: 'satellite',
            layers: [
                new GraphicsLayer({
                    id: 'analysisLayer'
                }),
                new FeatureLayer({
                    url: '//services.arcgis.com/BG6nSlhZSAWtExvp/arcgis/rest/services/World_Volcanoes/FeatureServer/0',
                    id: 'volcanoesLayer'
                })
            ]
        });
    }
}
