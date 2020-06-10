import React from 'react';
import { withTranslation } from 'react-i18next';

function Title(props) {
  return (
    <div className="title">
        <div className="name">
            <div className="lv">
                <div className="level">
                    <p>LV.{ props.lv }</p>
                </div>
                <div className="nickname">
                     <p>{ props.nick }</p>
                </div>
            </div>
            <div className="sub">
                <div className="point">
                    <p>{props.t('user.title.point')}<span>{ props.pt }PT</span></p>
                </div>
                <div className="rank">
                    <p>{props.t('user.title.rank')}<span>{ props.rank }.</span></p>
                </div>
            </div>
            <div className="share">
                <ul>
                    <li>
                        <img src="/img/icon-share-14.svg" alt="share"/>
                        <span className="desktop">{props.t('user.title.share')}</span>
                    </li>
                    <li>
                        <img src="/img/icon-important-ver-2-14.svg" alt="report"/>
                        <span className="desktop">{props.t('user.title.report')}</span>
                    </li>
                    <li>
                        <img src="/img/icon-view-14.svg" alt="view"/>
                        <span>{ props.view }</span>
                    </li>
                </ul>
            </div>
            <div className="searchbar desktop">
                <input type="text" placeholder={props.t('user.title.placeholder')} />
                <button>
                    <img src="/img/btn-magnifier-ver-2-22.png" srcSet="/img/btn-magnifier-ver-2-22@2x.png 2x,
                    /img/btn-magnifier-ver-2-22@3x.png 3x" className="Btn_Magnifier_ver2_22" alt="search"/>
                </button>
            </div>
        </div>
        <div className="thumbnail">
            <div className="profile">
            </div>
        </div>
    </div>
  );
}

export default withTranslation()(Title);