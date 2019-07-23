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
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerComponent,
    BindingsComponent,
    CockpitComponent,
    serverElementComponent,
    AccountComponent,
    NewAccountComponent,
    RegisterComponent,
    FormComponent,
    FormDetailsComponent,
    ParentComponent,
    ChildComponent,
    TemplateDrivenComponent
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
