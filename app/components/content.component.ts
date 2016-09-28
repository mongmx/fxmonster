import { Component } from '@angular/core';

@Component({
  selector: 'fx-content',
  template: `
    <div class="main-panel">
      <router-outlet></router-outlet>
      <fx-footer></fx-footer>
    </div>
  `
})

export class ContentComponent { }
