import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GenericPageModule } from '../generic-page/generic-page.module';

import { PastTrialsComponent } from './past-trials.component';

describe('PastTrialsComponent', () => {
  let component: PastTrialsComponent;
  let fixture: ComponentFixture<PastTrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTrialsComponent ],
      imports: [
        RouterTestingModule,
        GenericPageModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
