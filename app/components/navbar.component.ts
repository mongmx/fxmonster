import { Component } from '@angular/core';

@Component({
  selector: 'fx-navbar',
  template: `
    <div class="sidebar" data-background-color="black" data-active-color="danger">

    <!--
    Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
    Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
    -->

      <div class="sidebar-wrapper">
            <div class="logo">
                <a routerLink="" class="simple-text">
                    {{appName}}
                </a>
            </div>

            <ul class="nav">
                <li *ngFor="let page of pages" routerLinkActive="active">
                    <a routerLink="{{page.link}}">
                        <i class="{{page.icon}}"></i>
                        <p>{{page.name}}</p>
                    </a>
                </li>
            </ul>
      </div>
    </div>
  `
})

export class NavbarComponent {
  appName = 'fxmonster'
  appLink = 'http://www.creative-tim.com'
  pages = [
    { name: 'แดชบอร์ด', link: '/dashboard', icon: 'ti-panel' },
    { name: 'บันทึก', link: '/record', icon: 'ti-pencil-alt' },
    { name: 'สถิติ', link: '/stats', icon: 'ti-bar-chart' },
    { name: 'ข้อมูลส่วนตัว', link: '/user-profile', icon: 'ti-user' }
  ];
}
