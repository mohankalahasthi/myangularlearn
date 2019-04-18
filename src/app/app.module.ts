import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { BindingsComponent } from './bindings/bindings.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { serverElementComponent } from './server-element/server-element.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerComponent,
    BindingsComponent,
    CockpitComponent,
    serverElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
