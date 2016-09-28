import { Component } from '@angular/core';

@Component({
  selector: 'fx-content',
  template: `
    <div>
      <h4>Content</h4>
      <router-outlet></router-outlet>
    </div>
  `
})

export class ContentComponent { }
