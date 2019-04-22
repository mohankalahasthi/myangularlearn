import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {

@Output() filledForm = new EventEmitter<{name: string, place:string, phone:string, address:string}>();
@Output() clearForm = new EventEmitter <any>();

createForm(nam:string, plac:string, pho:string, addr:string ){
this.filledForm.emit({
  name:nam,
  place:plac,
  phone:pho,
  address:addr
})
}
clearData(){
  this.clearForm.emit({})
}
}
