import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GormDataManagementComponent } from './gorm-data-management.component';

describe('GormDataManagementComponent', () => {
  let component: GormDataManagementComponent;
  let fixture: ComponentFixture<GormDataManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GormDataManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GormDataManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
