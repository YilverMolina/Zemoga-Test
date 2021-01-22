import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VotesManagerService } from '../services/votes-manager.service';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a vote', () => {
    // given
    const votesManagerService: VotesManagerService = TestBed.get(VotesManagerService);
    const vote = votesManagerService.getVotes()[0];
    component.vote = vote;
    
    // when
    fixture.detectChanges();
    const card = fixture.debugElement.nativeElement;
    const title = card.querySelector('.votes__card--body--title');
    const description = card.querySelector('.votes__card--body-description');

    // then
    expect(component.vote).toEqual(vote);
    expect(title.innerHTML).toEqual(vote.name);
    expect(description.innerHTML.trim()).toEqual(vote.description.trim());
  });

  it('should emit onVoteNow', () => {
    // given
    const votesManagerService: VotesManagerService = TestBed.get(VotesManagerService);
    const vote = votesManagerService.getVotes()[0];
    spyOn(component.onVoteNow, 'emit');
    
    // when
    component.voteNow(vote);

    // then
    expect(component.onVoteNow.emit).toHaveBeenCalledWith(vote);
  });

  it('should emit onVoteAgain', () => {
    // given
    const votesManagerService: VotesManagerService = TestBed.get(VotesManagerService);
    const vote = votesManagerService.getVotes()[0];
    spyOn(component.onVoteAgain, 'emit');
    
    // when
    component.voteAgain(vote);

    // then
    expect(component.onVoteAgain.emit).toHaveBeenCalledWith(vote);
  });

  it('should emit onSelectThumbsUp', () => {
    // given
    const votesManagerService: VotesManagerService = TestBed.get(VotesManagerService);
    const vote = votesManagerService.getVotes()[0];
    spyOn(component.onSelectThumbsUp, 'emit');
    
    // when
    component.selectThumbsUp(vote);

    // then
    expect(component.onSelectThumbsUp.emit).toHaveBeenCalledWith(vote);
  });

  it('should emit onSelectThumbsDown', () => {
    // given
    const votesManagerService: VotesManagerService = TestBed.get(VotesManagerService);
    const vote = votesManagerService.getVotes()[0];
    spyOn(component.onSelectThumbsDown, 'emit');
    
    // when
    component.selectThumbsDown(vote);

    // then
    expect(component.onSelectThumbsDown.emit).toHaveBeenCalledWith(vote);
  });
});
