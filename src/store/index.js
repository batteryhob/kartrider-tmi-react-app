import MatchesStore from './matchesStore';

class RootStore {
  constructor(){
    this.matchesStore = new MatchesStore(this);
  }
}
export default RootStore;