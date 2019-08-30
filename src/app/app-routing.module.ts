import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { LocalstorageComponent } from "./localstorage/localstorage.component";
import { LifecylehooksComponent } from "./lifecylehooks/lifecylehooks.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { RegisterComponent } from './register/register.component';
import { BindingsComponent } from './bindings/bindings.component';

const routes: Routes = [
  { path: "binding", component: BindingsComponent },
  { path: "registrationform", component: RegistrationFormComponent },
  { path: "localstorage", component: LocalstorageComponent },
  { path: "lifecyclehooks", component: LifecylehooksComponent },
  { path: "templatedriven", component: TemplateDrivenComponent },
  { path: "register", component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
