import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StorageService } from './services/storage.service';
import { VotesManagerService } from './services/votes-manager.service';
import { VoteComponent } from './vote/vote.component';
import { VotesComponent } from './votes.component';

describe('VotesComponent', () => {
  let component: VotesComponent;
  let fixture: ComponentFixture<VotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VotesComponent, VoteComponent],
      providers: [
        StorageService,
        VotesManagerService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('votes should loaded', () => {
    // given
    const votesManagerService: VotesManagerService = TestBed.get(VotesManagerService);

    // when
    component.ngOnInit();

    // then
    expect(component.votes.length).toEqual(votesManagerService.getVotes().length);
  });

  it('localStorage should managed', () => {
    // given
    const storageService: StorageService = TestBed.get(StorageService);
    spyOn(storageService, 'manageLocalStorage');

    // when
    component.ngOnInit();

    // then
    expect(storageService.manageLocalStorage).toHaveBeenCalled();
    expect(storageService.getItem('votes')).not.toBeNull();
  });

  it('votes up should be added', () => {
    // given
    const voteId = 1;
    const storageService: StorageService = TestBed.get(StorageService);
    let vote = storageService.getVotesById(voteId);
    vote.id = voteId;
    vote.upIsSelected = true;
    const up = vote.up || 0;

    // when
    component.voteNow(vote);

    // then
    expect(vote.upIsSelected).toEqual(false);
    expect(vote.downIsSelected).toEqual(false);
    expect(vote.upVisible).toEqual(false);
    expect(vote.downVisible).toEqual(false);
    expect(vote.nowVisible).toEqual(false);
    expect(vote.againVisible).toEqual(true);
    expect(vote.message).toEqual('Thank you for voting!');
    vote = storageService.getVotesById(voteId);
    expect(vote.up).toEqual(up + 1);
  });

  it('votes down should be added', () => {
    // given
    const voteId = 1;
    const storageService: StorageService = TestBed.get(StorageService);
    let vote = storageService.getVotesById(voteId);
    vote.id = voteId;
    vote.downIsSelected = true;
    const down = vote.down || 0;

    // when
    component.voteNow(vote);

    // then
    expect(vote.upIsSelected).toEqual(false);
    expect(vote.downIsSelected).toEqual(false);
    expect(vote.upVisible).toEqual(false);
    expect(vote.downVisible).toEqual(false);
    expect(vote.nowVisible).toEqual(false);
    expect(vote.againVisible).toEqual(true);
    expect(vote.message).toEqual('Thank you for voting!');
    vote = storageService.getVotesById(voteId);
    expect(vote.down).toEqual(down + 1);
  });
});
