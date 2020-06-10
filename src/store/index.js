import MatchesStore from './matchesStore';
import UserStore from './userStore';

class RootStore {
  constructor(){
    this.matchesStore = new MatchesStore(this);
    this.userStore = new UserStore(this);
  }
}
export default RootStore;