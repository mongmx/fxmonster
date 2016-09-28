import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content.component';
import { DashboardComponent } from './components/dashboard.component';
import { FooterComponent } from './components/footer.component';
import { NavbarComponent } from './components/navbar.component';
import { NavbarTopComponent } from './components/navbar-top.component';
import { UserProfileComponent } from './components/user-profile.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    ContentComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    NavbarTopComponent,
    UserProfileComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
