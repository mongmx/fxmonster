import { Component } from '@angular/core';

@Component({
  selector: 'fx-navbar-top',
  template: `
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right">
        <!-- <li>
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="ti-panel"></i>
            <p>สถิติ</p>
          </a>
        </li> -->
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="ti-bell"></i>
            <p class="notification">5</p>
            <p>การแจ้งเตือน</p>
            <b class="caret"></b>
          </a>
          <ul class="dropdown-menu">
            <li><a href="#">Notification 1</a></li>
            <li><a href="#">Notification 2</a></li>
            <li><a href="#">Notification 3</a></li>
            <li><a href="#">Notification 4</a></li>
            <li><a href="#">Another notification</a></li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="ti-settings"></i>
            <p>ตั้งค่า</p>
          </a>
        </li>
      </ul>
    </div>
  `
})

export class NavbarTopComponent { }