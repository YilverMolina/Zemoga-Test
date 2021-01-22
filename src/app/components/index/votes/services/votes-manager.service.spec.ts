import { TestBed } from '@angular/core/testing';

import { VotesManagerService } from './votes-manager.service';

describe('VotesManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VotesManagerService = TestBed.get(VotesManagerService);
    expect(service).toBeTruthy();
  });

  it('votes should be created in storage', () => {
    // given
    const service: VotesManagerService = TestBed.get(VotesManagerService);
    const votes = service.getVotes();

    // when
    expect(votes.length).toEqual(service.getVotes().length);
    expect(votes[0].name).toEqual('Kanye West');
  });
});
