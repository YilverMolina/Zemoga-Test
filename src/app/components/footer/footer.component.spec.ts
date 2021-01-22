import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
const footerSocialCls = 'footer-social';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide social links', () => {
    // given
    component.showSocial = false;
    fixture.detectChanges();

    // when
    const socialPanel = document.querySelector(`.${footerSocialCls}`);

    // then
    expect(socialPanel).toBeNull();
  });

  it('should show social links', () => {
    // given
    component.showSocial = true;

    // when
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const socialPanel = compiled.querySelector(`.${footerSocialCls}`);

    // then
    expect(socialPanel).not.toBeNull();
  });
});
