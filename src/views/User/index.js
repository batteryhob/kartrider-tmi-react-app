import React, { Component } from 'react';

import Header from '../../shared/Header';

import Sticky from './components/Sticky';
import Footer from './components/Footer';

import Title from './components/Title';
import Summary from './components/Summary';
import Record from './components/Record';
import Matches from './components/Matches';

import Raise from './components/Raise';

import './user.css'

import { withTranslation } from 'react-i18next';

class User extends Component {

  constructor(props) {
    super(props);
    const nick = this.props.match.params.nick;
    this.state = {
      stickyFlag: false,
      raiseFlag: false,
      raiseType: "platform", //default: "platform"

      nick: nick,
      tab: true //default:개인전
    };
  }


  componentDidMount() {
      window.addEventListener('scroll', this._handleScroll.bind(this));
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this._handleScroll.bind(this));
  }
  
  _handleScroll() {
    let { stickyFlag } = this.state
    if(window.scrollY > 300 && !stickyFlag){
      this.setState(prevState =>{
          return{
              ...prevState,
              stickyFlag : !prevState.stickyFlag
          }
      })
    }
    if(window.scrollY <= 300 && stickyFlag){
      this.setState(prevState =>{
          return{
              ...prevState,
              stickyFlag : !prevState.stickyFlag
          }
      })
    }
  }

  tabChange = () => {
    this.setState(prevState =>{
        return{
            ...prevState,
            tab : !prevState.tab
        }
    })
  }
  raiseUp = (flag, type) => {
    this.setState({
        raiseFlag: flag,
        raiseType: type
    })
  }
  raiseDown = () => {
    this.setState({
        raiseFlag: false
    })
  }

  render(){

    let { t } = this.props
    let { stickyFlag, raiseFlag, raiseType, nick, tab } = this.state
    
    return (
      <div id="user"  >
        <Header history={this.props.history}/>
        <Sticky lv={ 99 } nick={ nick } active={ stickyFlag } />
        <main>
            <Title
              lv={ 99 }
              nick={ nick }
              pt={ 1000 }
              rank={ 1 }
              view={ 2022 }
            />
            <section>
                <div className="mode">
                    <ul>
                        <li onClick={ this.tabChange }>
                            <span className={ tab ? "active" : "" }>{t('user.mode.mode1')}</span>
                        </li>
                        <li onClick={ this.tabChange }>
                            <span className={ tab ? "" :"active " }>{t('user.mode.mode2')}</span>
                        </li>
                    </ul>
                </div>
                <Summary 
                  total="500" 
                  win="400" 
                  lose ="100"
                  winrate="80"
                  rate="20" 
                  retirerate ="30"
                  raiseUp={ this.raiseUp }                  
                />
                <Record/>
                <Matches raiseUp={ this.raiseUp } />
            </section>
          </main>
        <Footer />
        <Raise active={ raiseFlag }  type={ raiseType } raiseDown={ this.raiseDown } />
      </div>
    );
  }
}

export default withTranslation()(User);
