import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualkeyboardComponent } from './virtualkeyboard.component';

describe('VirtualkeyboardComponent', () => {
  let component: VirtualkeyboardComponent;
  let fixture: ComponentFixture<VirtualkeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualkeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualkeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
