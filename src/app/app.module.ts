import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ServerComponent } from "./server/server.component";
import { BindingsComponent } from "./bindings/bindings.component";
import { CockpitComponent } from "./cockpit/cockpit.component";
import { serverElementComponent } from "./server-element/server-element.component";
import { AccountComponent } from "./account/account.component";
import { NewAccountComponent } from "./new-account/new-account.component";
import { RegisterComponent } from "./register/register.component";
import { FormComponent } from "./form/form.component";
import { FormDetailsComponent } from "./form-details/form-details.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { LifecylehooksComponent } from "./lifecylehooks/lifecylehooks.component";
import { LocalstorageComponent } from "./localstorage/localstorage.component";
import { JsonobjectComponent } from "./jsonobject/jsonobject.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { PipesComponent } from "./pipes/pipes.component";
import { ShortenPipe } from "./shorten.pipe";
import { FilterPipe } from './filter.pipe';
import { LearnComponent } from './learn/learn.component';
import { ArrayoperationsComponent } from './arrayoperations/arrayoperations.component';
import { JstimersComponent } from './jstimers/jstimers.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VirtualkeyboardComponent } from './virtualkeyboard/virtualkeyboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatKeyboardModule } from '@ngx-material-keyboard/core';
import { WhitelableFormComponent } from './whitelable-form/whitelable-form.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';

import {MessageService} from './services/message.service';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { EcommerceService } from './services/ecommerce.service';

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
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    LearnComponent,
    ArrayoperationsComponent,
    JstimersComponent,
    VirtualkeyboardComponent,
    WhitelableFormComponent,
    DataSharingComponent,
    NgTemplateComponent,
    ProductsComponent,
    CartComponent,
    EcommerceComponent
  ],
  imports: [ BrowserModule, 
            AppRoutingModule, 
            FormsModule, 
            ReactiveFormsModule,
            MaterialModule,
            BrowserAnimationsModule,
            MatButtonModule,
            MatKeyboardModule,
        ],
  providers: [MessageService,EcommerceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
