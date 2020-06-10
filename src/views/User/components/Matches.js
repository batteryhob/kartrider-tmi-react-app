import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { withTranslation } from 'react-i18next';

@inject(stores => ({
    matches: stores.matchesStore.matches,
    matchDetail: stores.matchesStore.matchDetail,    
    getMatches: stores.matchesStore.getMatches,
    getMatchDetail: stores.matchesStore.getMatchDetail,
    openDetail: stores.matchesStore.openDetail
}))

@observer
class Matches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: true //default:트략
        };
    }

    componentDidMount() {
        const { getMatches, getMatchDetail } = this.props;
        getMatches();
        getMatchDetail();
    }

    tabChange = () => {
      this.setState(prevState =>{
          return{
              ...prevState,
              tab : !prevState.tab
          }
      })
    }

    getDetail = (idx) => {
        const { openDetail } = this.props;
        openDetail(idx)
    }


    render() {

        const { matches, matchDetail, t } = this.props;
        let { tab } = this.state;

        return (
            <div className="matches">
                <div className="contents">
                    <div className="tabs">
                        <span onClick={ this.tabChange } className={ tab ? "active" : "" }>{t('user.matches.tab1')}</span>
                        <span onClick={ this.tabChange } className={ tab ? "" : "active" }>{t('user.matches.tab2')}</span>
                    </div>
                    <div className={ tab ? "tracktab active" : "tracktab" }>
                        <div className="avg">
                            { t('user.matches.average') }<span>43.1%</span>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <div className="track-desc">
                                        <div className="track-name">
                                            사막 피라미드 탐험
                                        </div>
                                        <div>
                                            <span>횟수</span>20
                                        </div>
                                        <div>
                                            <span>기록</span>20
                                            </div>
                                        <div>
                                            <span>상위</span>20
                                            </div>
                                        <div>
                                            <span>승률</span>20
                                        </div>
                                        <img src="/img/map-2-04.png"
                                            srcSet="/img/map-2-04@2x.png 2x, /img/map-2-04@3x.png 3x" alt="track" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={ tab ? "karttab" : "karttab active" }>
                        <div className="first">
                            <div className="top">
                                <p className="kart-rank"><span>legend</span></p>
                                <p className="kart-name">핑크코튼</p>
                                <div className="kart-img">
                                    <img src="/img/image-tmi-kart-4.png"
                                        srcSet="/img/image-tmi-kart-4@2x.png 2x, /img/image-tmi-kart-4@3x.png 3x" alt="kart" />
                                </div>
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <img src="/img/map-2-04.png"
                                            srcSet="/img/map-2-04@2x.png 2x, /img/map-2-04@3x.png 3x" />
                              쥐라기 공룡 결투장
                              <span>
                                            1'11'11
                              </span>
                                    </li>
                                    <li>
                                        <img src="/img/map-2-04.png"
                                            srcSet="/img/map-2-04@2x.png 2x, /img/map-2-04@3x.png 3x" />
                              쥐라기 공룡 결투장
                              <span>
                                            1'11'11
                              </span>
                                    </li>
                                    <li>
                                        <img src="/img/map-2-04.png"
                                            srcSet="/img/map-2-04@2x.png 2x, /img/map-2-04@3x.png 3x" />
                              쥐라기 공룡 결투장
                              <span>
                                            1'11'11
                              </span>
                                    </li>
                                    <li>
                                        <img src="/img/map-2-04.png"
                                            srcSet="/img/map-2-04@2x.png 2x, /img/map-2-04@3x.png 3x" />
                              쥐라기 공룡 결투장
                              <span>
                                            1'11'11
                              </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="second desktop">
                            <ul>

                                <li className="active">
                                    <div className="checkbox">
                                        <span></span>
                                    </div>
                                    <img src="/img/image-tmi-kart-4.png"
                                        srcSet="/img/image-tmi-kart-4@2x.png 2x, /img/image-tmi-kart-4@3x.png 3x" />
                          쥐라기 공룡 결투장
                          <div className="desc">
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                    </div>
                                </li>

                                <li className="active">
                                    <div className="checkbox">
                                        <span></span>
                                    </div>
                                    <img src="/img/image-tmi-kart-4.png"
                                        srcSet="/img/image-tmi-kart-4@2x.png 2x, /img/image-tmi-kart-4@3x.png 3x" />
                          쥐라기 공룡 결투장
                          <div className="desc">
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                    </div>
                                </li>

                                <li className="active">
                                    <div className="checkbox">
                                        <span></span>
                                    </div>
                                    <img src="/img/image-tmi-kart-4.png"
                                        srcSet="/img/image-tmi-kart-4@2x.png 2x, /img/image-tmi-kart-4@3x.png 3x" />
                          쥐라기 공룡 결투장
                          <div className="desc">
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                    </div>
                                </li>

                                <li className="active">
                                    <div className="checkbox">
                                        <span></span>
                                    </div>
                                    <img src="/img/image-tmi-kart-4.png"
                                        srcSet="/img/image-tmi-kart-4@2x.png 2x, /img/image-tmi-kart-4@3x.png 3x" />
                          쥐라기 공룡 결투장
                          <div className="desc">
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                    </div>
                                </li>

                                <li className="active">
                                    <div className="checkbox">
                                        <span></span>
                                    </div>
                                    <img src="/img/image-tmi-kart-4.png"
                                        srcSet="/img/image-tmi-kart-4@2x.png 2x, /img/image-tmi-kart-4@3x.png 3x" />
                          쥐라기 공룡 결투장
                          <div className="desc">
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                        <span>
                                            1'11'11
                              </span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="select mobile" onClick={ ()=> this.props.raiseUp( true, 'kartselect' )} >
                            핑크코튼<i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="list">
                        <div className="top">
                            <div>
                                { t('user.matches.title') }
                            </div>
                            <div className="sub desktop">
                                <i className="blue fas fa-circle"></i><span>1등</span>
                                <i className="yellow fas fa-circle"></i><span>완주</span>
                                <i className="pink fas fa-circle"></i><span>리타이어</span>
                            </div>
                        </div>
                        <div>
                            <ul>
                                {
                                    matches.map((el, idx) => {
                                        return (
                                            <li className={ el.open ? "match active" : "match" } key={ idx } >
                                                <div className="rank blue">
                                                    <div>
                                                        <i className="fas fa-circle"></i>
                                                        <span>1/8</span>
                                                    </div>
                                                </div>
                                                <div className="when">
                                                    <span>1 시간 전</span>
                                                </div>
                                                <div className="map">
                                                    <div className="name">
                                                        <div>
                                                            광산 꼬불꼬불꼬불꼬불꼬불 다운힐
                                        </div>
                                                    </div>
                                                    <div className="mobile">
                                                        <span>1 시간 전</span>
                                                        <span>1'11'30</span>
                                                    </div>
                                                </div>
                                                <div className="time">
                                                    <span>1'11'30</span>
                                                </div>
                                                <div className="kartname">
                                                    <span className="kart">
                                                        <img src="/img/image-tmi-kart-4.png"
                                                            srcSet="/img/image-tmi-kart-4@2x.png 2x, /img/image-tmi-kart-4@3x.png 3x" alt="kart" />
                                                    </span>
                                                    <span className="name">
                                                        황금기사X
                                                    </span>
                                                </div>
                                                <div className="spread" onClick={ ()=> this.getDetail(idx) }>
                                                    <div>
                                                        <i className="fas fa-chevron-down"></i>
                                                    </div>
                                                </div>

                                                <div className="detail">
                                                    <ul>
                                                        {
                                                            matchDetail.players.map((de,i)=>{
                                                                return(
                                                                    <li className="active" key={ i }>
                                                                        <div className="wrapper">
                                                                            <div className="kart">
                                                                                <img src="/img/image-tmi-kart-4.png"
                                                                                    srcSet="/img/image-tmi-kart-4@2x.png 2x, /img/image-tmi-kart-4@3x.png 3x" alt="kart"/>
                                                                            </div>
                                                                            <div className="result">
                                                                                <span className="win">1위</span>
                                                                            </div>
                                                                            <div className="nick">
                                                                                배터리호
                                                                            </div>
                                                                            <div>
                                                                                1'22'33
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Matches);
