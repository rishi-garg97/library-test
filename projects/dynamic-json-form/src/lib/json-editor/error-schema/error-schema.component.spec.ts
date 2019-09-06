import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSchemaComponent } from './error-schema.component';

describe('ErrorSchemaComponent', () => {
  let component: ErrorSchemaComponent;
  let fixture: ComponentFixture<ErrorSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
