import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { BannerComponent } from './banner/banner.component';
import { CountedComponent } from './counted/counted.component';

import { IndexComponent } from './index.component';
import { SubmitComponent } from './submit/submit.component';
import { VoteComponent } from './votes/vote/vote.component';
import { VotesComponent } from './votes/votes.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IndexComponent,
        BannerComponent,
        CountedComponent,
        VotesComponent,
        VoteComponent,
        SubmitComponent
      ],
      imports: [
        FooterModule,
        HeaderModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
