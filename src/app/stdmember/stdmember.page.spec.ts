import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdmemberPage } from './stdmember.page';

describe('StdmemberPage', () => {
  let component: StdmemberPage;
  let fixture: ComponentFixture<StdmemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdmemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdmemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
