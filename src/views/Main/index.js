import React, { Component }from 'react';

import Header from '../../shared/Header';
import Footer from './components/Footer';
import Bgs from './components/Bgs';
import Searchbar from './components/Searchbar';

import './main.css'

// the hoc
import { withTranslation } from 'react-i18next';

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
    let { t } = this.props;
    let { active } = this.state;
    return (
        <div id="main">
          <Header history={this.props.history}/>
            <main>
              <Bgs/>
              <section>
                <div className={ active ? 'search active' : 'search' }>
                    <div className="txt">
                        <div className="helloworld">
                            {t('main.helloworld')}
                        </div>
                    </div>
                    <div className="visual">
                        <img src="/img/bitmap-copy.png" srcSet="/img/bitmap-copy@2x.png 2x, /img/bitmap-copy@3x.png 3x" className="Bitmap-Copy" alt="logo"/>               
                    </div>
                    <div className="subtitle">
                        Dynamic Action Racing Nexon Game
                    </div> 
                    <Searchbar activeCheck={ this.activeCheck } history={this.props.history}/>
                    <div className="cover"></div>  
                </div>
              </section>
            </main>
          <Footer/>
      </div>
    )
  }
}

export default withTranslation()(Main);
