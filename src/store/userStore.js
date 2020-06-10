import { observable, action } from 'mobx';

export default class UserStore {
  @observable user = {};
  
  @action getUser = (keyword) => {
    this.user = {
      name: '배터리호'
    }
  }

}