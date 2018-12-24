import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mps-root',
  template: `
    <div id="site-content">
        <mps-header></mps-header>
        <main class="main-content">
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </main>
        <mps-footer></mps-footer>
    </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RootComponent implements OnInit {

    constructor() {}

    ngOnInit() {}
}
