import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicJsonFormComponent } from './dynamic-json-form.component';

describe('DynamicJsonFormComponent', () => {
  let component: DynamicJsonFormComponent;
  let fixture: ComponentFixture<DynamicJsonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicJsonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicJsonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
