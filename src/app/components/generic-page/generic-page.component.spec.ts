import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { GenericPageComponent } from './generic-page.component';

describe('GenericPageComponent', () => {
  let component: GenericPageComponent;
  let fixture: ComponentFixture<GenericPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GenericPageComponent,
        HeaderComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should show the title 'Past Trials'`, () => {
    // given
    const pTitle = 'Past Trials';
    component.pageTitle = pTitle;

    // when
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelector('#title').querySelector('h1');

    // then
    expect(title.innerHTML).toEqual(pTitle);
  });

  it(`should show the title 'How It Works'`, () => {
    // given
    const pTitle = 'How It Works';
    component.pageTitle = pTitle;

    // when
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelector('#title').querySelector('h1');

    // then
    expect(title.innerHTML).toEqual(pTitle);
  });
});
