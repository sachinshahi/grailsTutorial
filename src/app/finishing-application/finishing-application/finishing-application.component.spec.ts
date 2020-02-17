import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingApplicationComponent } from './finishing-application.component';

describe('FinishingApplicationComponent', () => {
  let component: FinishingApplicationComponent;
  let fixture: ComponentFixture<FinishingApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishingApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
