import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const navigationItems = require('../../mocks/navigation-items.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation items', () => {
    // given
    component.navigationItems = navigationItems;

    // when
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const ul = compiled.querySelector('#navigation-menu').querySelector('ul');

    // then
    expect(component.navigationItems).toBeDefined();
    expect(component.navigationItems.length).toEqual(2);
    expect(ul.children.length).toEqual(component.navigationItems.length + 1);
  });
});
