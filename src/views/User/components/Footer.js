import React from 'react';
import { withTranslation } from 'react-i18next';

const Footer = (props) => {
  return (
    <footer>
        <div className="logos">
            <img src="/img/icon-bi-nexon-24.png" srcSet="/img/icon-bi-nexon-24@2x.png 2x, /img/icon-bi-nexon-24@3x.png 3x" className="nexon" alt="nexon"/>
            <img src="/img/icon-popupclose-14.png" srcSet="/img/icon-popupclose-14@2x.png 2x, /img/icon-popupclose-14@3x.png 3x" className="close" alt="close" />
            <img src="/img/icon-bi-intelligencelabs-24.png" srcSet="/img/icon-bi-intelligencelabs-24@2x.png 2x, /img/icon-bi-intelligencelabs-24@3x.png 3x" className="labs" alt="labs"/>
        </div>
        <div className="policy">
            { props.t('footer.policy') }
        </div>
        <div className="copy">
            2020 NEXON Korea Corporation All Rights Reserved.
        </div>
    </footer>
  );
}

export default withTranslation()(Footer);
