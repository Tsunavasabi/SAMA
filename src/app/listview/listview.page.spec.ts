import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListviewPage } from './listview.page';

describe('ListviewPage', () => {
  let component: ListviewPage;
  let fixture: ComponentFixture<ListviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
