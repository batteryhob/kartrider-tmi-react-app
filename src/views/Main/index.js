import React, { Component }from 'react';

import Header from '../../shared/Header';
import Footer from './components/Footer';
import Bgs from './components/Bgs';
import Searchbar from './components/Searchbar';

import './main.css'

class Main extends Component {

  constructor(props) {
      super(props);
      this.state = {
          active: false
      };
  }

  activeCheck = (value) => {

    if(value.length > 0){
      this.setState({
          active : true
      })
    }else{
      this.setState({
          active : false
      })
    }

  }

  render () {
    let { active } = this.state;
    return (
        <div id="main">
          <Header menu1='검색' menu2='랭킹' menu3='카트' menu4='트랙'/>
            <main>
              <Bgs/>
              <section>
                <div className={ active ? 'search active' : 'search' }>
                    <div className="txt">
                        <div className="helloworld">
                            전적검색
                        </div>
                    </div>
                    <div className="visual">
                        <img src="/img/bitmap-copy.png"
                        srcSet="/img/bitmap-copy@2x.png 2x,
                                /img/bitmap-copy@3x.png 3x"
                                className="Bitmap-Copy" />               
                    </div>
                    <div className="subtitle">
                        <div></div>
                    </div>
                    <Searchbar activeCheck={ this.activeCheck }/>
                </div>
              </section>
            </main>
          <Footer/>
      </div>
    )
  }
}

export default Main;
