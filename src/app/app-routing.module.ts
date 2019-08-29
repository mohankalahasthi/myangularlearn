import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { LocalstorageComponent } from "./localstorage/localstorage.component";
import { LifecylehooksComponent } from "./lifecylehooks/lifecylehooks.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";

const routes: Routes = [
  { path: "registrationform", component: RegistrationFormComponent },
  { path: "localstorage", component: LocalstorageComponent },
  { path: "lifecyclehooks", component: LifecylehooksComponent },
  { path: "templatedriven", component: TemplateDrivenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
