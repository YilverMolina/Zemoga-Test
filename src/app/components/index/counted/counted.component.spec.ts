import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountedComponent } from './counted.component';

describe('CountedComponent', () => {
  let component: CountedComponent;
  let fixture: ComponentFixture<CountedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
