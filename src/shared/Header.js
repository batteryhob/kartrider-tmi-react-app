import React from 'react';
import { withTranslation } from 'react-i18next';

const Header = (props) => {
    
  function goHome(){
    props.history.push({
        pathname: `/drift/`
    })
  }

  return (
    <header>
        <div className="contents">
            <svg className="tmi" onClick={ goHome } xmlns="http://www.w3.org/2000/svg" width="73" height="28" viewBox="0 0 73 28">
                <path fillRule="evenodd" d="M66.5 0C70.09 0 73 2.91 73 6.5V28h-6V6.5c0-.276-.224-.5-.5-.5-.245 0-.45.177-.492.41L66 6.5V28h-6V6.5C60 2.91 62.91 0 66.5 0zm-15 0c3.512 0 6.373 2.785 6.496 6.267L58 6.5V28h-6V6.5l-.008-.09C51.95 6.177 51.745 6 51.5 6s-.45.177-.492.41L51 6.5v15c0 3.59-2.91 6.5-6.5 6.5S38 25.09 38 21.5v-15c0-.276-.224-.5-.5-.5-.245 0-.45.177-.492.41L37 6.5V28h-6V6.5C31 2.91 33.91 0 37.5 0S44 2.91 44 6.5v15c0 .276.224.5.5.5.245 0 .45-.177.492-.41L45 21.5v-15C45 2.91 47.91 0 51.5 0zM21 0c6.5 0 8 4 8 6.5S27.5 13 21 13v15h-6V8c0-.667.333-1 1-1h6.5c.333 0 .5-.167.5-.5 0-.333-.167-.5-.5-.5h-16c-.333 0-.5.167-.5.5 0 .333.167.5.5.5H13c.667 0 1 .333 1 1v20H8V13c-6.5 0-8-4-8-6.5S1.5 0 8 0h13z"/>
            </svg>
            <div className="menu-center desktop">
                <ul>
                    <li className="active">
                        { props.t('header.menu1') }
                    </li>
                    <li>
                        { props.t('header.menu2') }
                    </li>
                    <li>
                        { props.t('header.menu3') }
                    </li>
                    <li>
                        { props.t('header.menu4') }
                    </li>
                </ul>
                <div className="underbar">
                </div>
            </div>
            <div className="menu-right">
                <img className="mobile" src="/img/btn-magnifier-ver-2-22.png" srcSet="/img/btn-magnifier-ver-2-22@2x.png 2x, /img/btn-magnifier-ver-2-22@3x.png 3x" alt="homepage"/>
                <div className="homepage">
                    <span>Kartrider Drift</span>
                    <div className="arrow">
                        <img src="/img/icon-arrow-l-8.png" alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default withTranslation()(Header);
