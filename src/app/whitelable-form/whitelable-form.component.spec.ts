import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitelableFormComponent } from './whitelable-form.component';

describe('WhitelableFormComponent', () => {
  let component: WhitelableFormComponent;
  let fixture: ComponentFixture<WhitelableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitelableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitelableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
