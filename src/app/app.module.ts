import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComartComponent } from './comart/comart.component';

import { ComartService } from './services/comart.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ComartComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [ComartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
