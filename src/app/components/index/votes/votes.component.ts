import { Component, OnInit } from '@angular/core';
import { Vote } from 'src/app/contracts/models/vote.model';
import { StorageService } from './services/storage.service';
import { VotesManagerService } from './services/votes-manager.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  public votes: Vote[] = [];

  constructor(
    private storageService: StorageService,
    private votesManagerService: VotesManagerService) { }

  ngOnInit() {
    this.storageService.manageLocalStorage();
    this.votes = this.votesManagerService.getVotes();
    this.updateVotes();
  }

  public voteNow(vote: Vote) {
    if (this.voteTypeIsValid(vote)) {
      if (vote.upIsSelected) {
        this.storageService.addVote(vote.id);
      } else if (vote.downIsSelected) {
        this.storageService.downVote(vote.id);
      }

      this.updateVote(vote);
      vote.upIsSelected = false;
      vote.downIsSelected = false;

      vote.upVisible = false;
      vote.downVisible = false;
      vote.nowVisible = false;
      vote.againVisible = true;

      vote.message = 'Thank you for voting!';
    }
  }

  public voteAgain(vote: Vote) {
    vote.upVisible = true;
    vote.downVisible = true;
    vote.nowVisible = true;
    vote.againVisible = false;
    vote.message = vote.description;
  }

  public selectThumbsUp(vote: Vote) {
    vote.upIsSelected = !vote.upIsSelected;
    vote.downIsSelected = false;
  }

  public selectThumbsDown(vote: Vote) {
    vote.downIsSelected = !vote.downIsSelected;
    vote.upIsSelected = false;
  }

  private updateVotes() {
    this.votes.forEach(vote => {
      this.updateVote(vote);
    });
  }

  private voteTypeIsValid(vote: Vote) {
    return vote.upIsSelected || vote.downIsSelected;
  }

  private updateVote(vote: Vote) {
    const storedVote = this.storageService.getVotesById(vote.id);
    vote.up = storedVote.up;
    vote.down = storedVote.down;
    vote.resultVisibility = vote.up === 0 && vote.down === 0 ? 'hidden' : 'visible';
    const votesUp = vote.up || 0, votesDown = vote.down || 0;
    const totalVotes = votesUp + votesDown;
    let percUp = parseInt(((votesUp * 100) / totalVotes) + ''),
      percDown = parseInt(((votesDown * 100) / totalVotes) + '');
    percUp = isNaN(percUp) ? 0 : percUp;
    percDown = isNaN(percDown) ? 0 : percDown;

    vote.percUp = percUp;
    vote.percDown = percDown;
    vote.upIsSelected = false;
    vote.downIsSelected = false;

    vote.upVisible = true;
    vote.downVisible = true;
    vote.nowVisible = true;
    vote.againVisible = false;
  }
}
