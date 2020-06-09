import React from 'react';

const Footer = ({ menu1, menu2, menu3, menu4 }) => {
  return (
    <footer>
        <div className="logos">
            <img src="/img/icon-bi-nexon-24.png" srcSet="img/icon-bi-nexon-24@2x.png 2x,
            img/icon-bi-nexon-24@3x.png 3x" className="nexon" />
            <i className="fas fa-times"></i>
            <img src="/img/icon-bi-intelligencelabs-24.png" srcSet="img/icon-bi-intelligencelabs-24@2x.png 2x,
                        img/icon-bi-intelligencelabs-24@3x.png 3x" className="labs" />
        </div>
        <div className="policy">
            개인정보취급방침
        </div>
        <div className="copy">
            2020 NEXON Korea Corporation All Rights Reserved.
        </div>
    </footer>
  );
}

export default Footer;
