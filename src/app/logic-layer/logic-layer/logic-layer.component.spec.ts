import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicLayerComponent } from './logic-layer.component';

describe('LogicLayerComponent', () => {
  let component: LogicLayerComponent;
  let fixture: ComponentFixture<LogicLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
