import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageKey = 'votes';

  constructor() { }

  public manageLocalStorage() {
    var votes = this.getItem(this.storageKey);
    if (!votes || Object.keys(votes).length === 0) {
      this.setItem(this.storageKey, {});
    }
  }

  public setItem(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key) {
    var value = window.localStorage.getItem(key) || '{}';
    return JSON.parse(value);
  }

  public getVotesById(id) {
    var votes = this.getItem(this.storageKey);
    if (!votes[id]) {
      votes[id] = {
        up: 0, down: 0
      }
      this.setItem(this.storageKey, votes);
    }
    return this.getItem(this.storageKey)[id];
  }

  public addVote(id) {
    var votes = this.getItem(this.storageKey);
    var votesById = this.getVotesById(id);
    votesById.up = parseInt(votesById.up) + 1;
    votes[id] = votesById;
    this.setItem(this.storageKey, votes);
  }

  public downVote(id) {
    var votes = this.getItem(this.storageKey);
    var votesById = this.getVotesById(id);
    votesById.down = parseInt(votesById.down) + 1;
    votes[id] = votesById;
    this.setItem(this.storageKey, votes);
  }
}
