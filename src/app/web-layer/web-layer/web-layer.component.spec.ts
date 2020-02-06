import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLayerComponent } from './web-layer.component';

describe('WebLayerComponent', () => {
  let component: WebLayerComponent;
  let fixture: ComponentFixture<WebLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
