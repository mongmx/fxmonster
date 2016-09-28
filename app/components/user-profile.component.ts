import { Component } from '@angular/core';

@Component({
  selector: 'fx-user-profile',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar bar1"></span>
            <span class="icon-bar bar2"></span>
            <span class="icon-bar bar3"></span>
          </button>
          <a class="navbar-brand" href="#">{{pageTitle}}</a>
        </div>
        <fx-navbar-top></fx-navbar-top>
      </div>
    </nav>
    <div class="content">
      <div class="container-fluid">
        <p>{{content}}</p>
      </div>
    </div>
  `
})

export class UserProfileComponent {
  pageTitle = 'User Profile'
  content = 'Content Here'
}
