import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicApplicationStackComponent } from './basic-application-stack.component';

describe('BasicApplicationStackComponent', () => {
  let component: BasicApplicationStackComponent;
  let fixture: ComponentFixture<BasicApplicationStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicApplicationStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicApplicationStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
