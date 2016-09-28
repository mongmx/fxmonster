import { Component } from '@angular/core';

@Component({
  selector: 'fx-navbar',
  template: `
    <div>
      <h4>Navbar</h4>
      <ul>
        <li><a routerLink="/dashboard">Dashboard</a></li>
        <li><a routerLink="/user-profile">User Profile</a></li>
      </ul>
    </div>
  `
})

export class NavbarComponent { }
