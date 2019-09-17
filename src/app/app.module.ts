import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LifecylehooksComponent } from './lifecylehooks/lifecylehooks.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { JsonobjectComponent } from './jsonobject/jsonobject.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipesComponent } from './pipes/pipes.component';


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
    TemplateDrivenComponent,
    RegistrationFormComponent,
    LifecylehooksComponent,
    LocalstorageComponent,
    JsonobjectComponent,
    SidenavComponent,
    ReactiveFormComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
