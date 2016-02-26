import { Component, ViewChildren } from 'angular2/core';
// import { EsriMapViewComponent } from './esri-map-view.component';
import { EsriSceneViewComponent } from './esri-scene-view.component';
import { BrowserDetectionService } from './browser-detection.service'

@Component({
    selector: 'synced-views',
    template: 
        `
        <h4 *ngIf="isMobile">{{ isMobileMessage }} <span class="label warning">Warning</span></h4>
        
        <div class="tabs two" *ngIf="!isMobile">
            <input id='tab-1' type='radio' name='tabgroupB' checked />
            <label class="pseudo button toggle" for="tab-1" (click)="syncViews()">Scene View 1</label>
            <input id='tab-2' type='radio' name='tabgroupB'>
            <label class="pseudo button toggle" for="tab-2" (click)="syncViews()">Scene View 2</label>
            <div class="row">
                <div>
                    <esri-scene-view></esri-scene-view>
                </div>
                <div>
                    <esri-scene-view></esri-scene-view>
                </div>
            </div>
        </div>
        <label>
            <input #delayedCB type="checkbox" [checked]="delayedSync" (change)="delayedSync = delayedCB.checked">
            <span class="checkable">Delayed syncing</span>
        </label>
        `,
     directives: [/*EsriMapViewComponent, */EsriSceneViewComponent],
     providers: [BrowserDetectionService]
})
export class SyncedViewsComponent {
    isMobile: false;
    isMobileMessage: null;
    delayedSync: false;

    constructor(private _browserSniffer: BrowserDetectionService) {
        this.isMobile = _browserSniffer.isMobile();
        this.isMobileMessage = _browserSniffer.isMobileMessage;
    }

    @ViewChildren(EsriSceneViewComponent)
    sceneViewComponents: EsriSceneViewComponent

    syncViews() {
        this.sceneViewComponents.toArray().forEach(svc => svc.syncCamera(this.delayedSync));
    }
}
