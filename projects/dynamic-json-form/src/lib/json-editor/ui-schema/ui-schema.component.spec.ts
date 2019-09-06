import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSchemaComponent } from './ui-schema.component';

describe('UiSchemaComponent', () => {
  let component: UiSchemaComponent;
  let fixture: ComponentFixture<UiSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
