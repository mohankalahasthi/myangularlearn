import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNationComponent } from './page-nation.component';

describe('PageNationComponent', () => {
  let component: PageNationComponent;
  let fixture: ComponentFixture<PageNationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
