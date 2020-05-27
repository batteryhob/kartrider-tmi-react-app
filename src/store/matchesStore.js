import { observable, action } from 'mobx';

export default class MatchesStore {
  @observable matches = [];
  
  @action getMatches = () => {
    this.matches = [
      {
        name: '배터리호',
        matchId: 1.
      },{
        name: '배터리호',
        matchId: 2.
      }
    ];
  }

  //vue의 computed랑 같은 역할
  // @computed
  // get total() {
  //   return this.selectedItems.reduce((previous, current) => {
  //     return previous + current.price * current.count;
  //   }, 0);
  // }

}