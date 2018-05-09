import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBagComponent } from './full-bag.component';

describe('FullBagComponent', () => {
  let component: FullBagComponent;
  let fixture: ComponentFixture<FullBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
