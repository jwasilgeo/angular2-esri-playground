import { Component, ViewChildren } from 'angular2/core';
import { EsriSceneViewComponent } from './esri-scene-view.component';
import { ViewCoordinationService } from './view-coordination.service';
import { BrowserDetectionService } from './browser-detection.service';

@Component({
    selector: 'synced-views',
    styles: [`
        .label-override {
            margin-left: 0;
            margin-right: 1em;
        }
        `],
    template: 
        `
        <h4 *ngIf="isMobile"><span class="label warning label-override">Warning</span> {{ isMobileMessage }}</h4>
        
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
        
        <p>This example demonstrates two different Esri scene views that share the same Esri map. Explore them by switching between the tabs above.</p>
        <p>A custom Angular 2 service keeps track of changes in the current view's camera position properties, so that when switching between tabs, the next view you interact with will be in the same position.</p>
        
        <div *ngIf="!isMobile">
            <p>Go ahead—we all know you want to click on stuff—set some options to help illustrate this concept:</p>
            <label>
                <input #delaySyncCB type="checkbox" [checked]="delaySync" (change)="delaySync = delaySyncCB.checked" [disabled]="disableSync">
                <span class="checkable" [style.text-decoration]="disableSync ? 'line-through' : 'none'">Delay syncing</span>
            </label>
            <label>
                <input #disableSyncCB type="checkbox" [checked]="disableSync" (change)="disableSync = disableSyncCB.checked">
                <span class="checkable">Disable syncing</span>
            </label>
        </div>
        `,
     directives: [EsriSceneViewComponent],
     providers: [ViewCoordinationService, BrowserDetectionService]
})
export class SyncedViewsComponent {
    isMobile: false;
    isMobileMessage: null;
    delaySync: false;
    disableSync: false;

    constructor(private _browserSniffer: BrowserDetectionService) {
        this.isMobile = _browserSniffer.isMobile();
        this.isMobileMessage = _browserSniffer.isMobileMessage;
    }

    @ViewChildren(EsriSceneViewComponent)
    sceneViewComponents: EsriSceneViewComponent

    syncViews() {
        if (!this.disableSync) {
            this.sceneViewComponents.toArray().forEach(svc => svc.syncCamera(this.delaySync));
        }
    }
}
