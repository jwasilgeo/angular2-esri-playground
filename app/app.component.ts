import { Component } from '@angular/core';

@Component({
    selector: 'playground-app',
    styles: [`
        section {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 4em 0 0 0;
        }
        `],
    template: `
        <nav>
            <a href="#" class="brand">
                <span>Angular 2 + Esri 4</span>
            </a>

            <!-- responsive-->
            <input id="bmenub" type="checkbox" class="show">
            <label for="bmenub" class="burger pseudo button">≡</label>

            <div class="menu">
                <a class="pseudo button" [routerLink]="['intro']">Intro</a>
                <a class="button" [routerLink]="['synced-views']">Synced 3D Views</a>
                <a class="button" [routerLink]="['geom-engine-showcase']">Geometry Engine</a>

                <a class="pseudo button" href="https://github.com/jwasilgeo/angular2-esri-playground">Github</a>
                <a class="pseudo button" href="https://twitter.com/JWasilGeo">@JWasilGeo</a>
            </div>
        </nav>
        <main>
            <section>
                <router-outlet></router-outlet>
            </section>
        </main>
        `
})
export class AppComponent { }
