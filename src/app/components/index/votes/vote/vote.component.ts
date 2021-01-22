import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vote } from 'src/app/contracts/models/vote.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  @Input() vote: Vote = {} as Vote;
  @Output() onVoteNow = new EventEmitter<Vote>();
  @Output() onVoteAgain = new EventEmitter<Vote>();
  @Output() onSelectThumbsUp = new EventEmitter<Vote>();
  @Output() onSelectThumbsDown = new EventEmitter<Vote>();

  constructor() { }

  ngOnInit() {
  }

  public voteNow(vote: Vote) {
    this.onVoteNow.emit(vote);
  }

  public voteAgain(vote: Vote) {
    this.onVoteAgain.emit(vote);
  }

  public selectThumbsUp(vote: Vote) {
    this.onSelectThumbsUp.emit(vote);
  }

  public selectThumbsDown(vote: Vote) {
    this.onSelectThumbsDown.emit(vote);
  }
}
