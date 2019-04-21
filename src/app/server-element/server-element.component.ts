import { Component,
   OnInit,
    Input,
    OnChanges, 
    SimpleChanges, 
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class serverElementComponent implements OnInit,
 OnChanges, 
 DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  @Input() serverElementObj: { type: string , name: string , content: string}
  @Input() name: String;
  constructor() {
    console.log('constructor called !')
   }
   ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChange called !');
    console.log(changes);
   }

  ngOnInit() {
  console.log('ngOnInit called !')

  }
  ngDoCheck(){
    console.log('ngDoCheck called !')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called !')
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked called !')
  }
  ngAfterViewInit(){
    console.log('AfterViewInit called !')
  }
  ngAfterViewChecked(){
    console.log('AfterViewChecked called !')
  }
  ngOnDestroy(){
    console.log('OnDestroy called !')
  }


}
