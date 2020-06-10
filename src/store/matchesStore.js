import { observable, action } from 'mobx';

export default class MatchesStore {
  @observable matches = [];
  @observable matchDetail = {};

  @action getMatches = () => {
    this.matches = [
      {
        matchId : 1,
        open: false,
      },{
        matchId : 2,
        open: false,
      }
    ];
  }

  @action openDetail = (idx) => {
    if(this.matches.length > 0)
      this.matches[idx].open = !this.matches[idx].open
  }
  
  @action getMatchDetail = () => {
    this.matchDetail = {
      matchId : 1,
      players : [
        {
          name: '배터리호'
        }
      ]
    }
  }

  //vue의 computed랑 같은 역할
  // @computed
  // get total() {
  //   return this.selectedItems.reduce((previous, current) => {
  //     return previous + current.price * current.count;
  //   }, 0);
  // }

}