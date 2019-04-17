import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { BindingsComponent } from './bindings/bindings.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { SpecialElementComponent } from './special-element/special-element.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerComponent,
    BindingsComponent,
    CockpitComponent,
    SpecialElementComponent
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
