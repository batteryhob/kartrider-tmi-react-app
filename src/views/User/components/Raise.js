import React from 'react';
import { withTranslation } from 'react-i18next';

function Raise(props) {

  let txt;
  let platform;
  let kartselect;

  if(props.type === 'platform'){
    txt = "플랫폼 이용 비율."
    platform =  <ul className="platform">
                    <li>
                        <img src="/img/icon-tmi-platform-pc-01.png"
                        srcSet="/img/icon-tmi-platform-pc-01@2x.png 2x,
                                /img/icon-tmi-platform-pc-01@3x.png 3x"
                        className="Icon_tmi_platform_pc_01" alt="pc"/>
                        PC<span>100%</span>
                    </li>
                    <li>
                        <img src="/img/icon-tmi-platform-xbox-01.png"
                        srcSet="/img/icon-tmi-platform-xbox-01@2x.png 2x,
                                /img/icon-tmi-platform-xbox-01@3x.png 3x"
                        className="Icon_tmi_platform_pc_01" alt="xbox"/>
                        XBOX<span>100%</span>
                    </li>
                    <li>
                        <img src="/img/icon-tmi-platform-steam-01.png"
                        srcSet="/img/icon-tmi-platform-steam-01@2x.png 2x,
                                /img/icon-tmi-platform-steam-01@3x.png 3x"
                        className="/Icon_tmi_platform_pc_01" alt="steam"/>
                        Steam<span>100%</span>
                    </li>
                    <li>
                        <img src="/img/icon-tmi-platform-ps-01.png"
                        srcSet="/img/icon-tmi-platform-ps-01@2x.png 2x,
                                /img/icon-tmi-platform-ps-01@3x.png 3x"
                        className="Icon_tmi_platform_pc_01" alt="platform"/>
                        PS<span>100%</span>
                    </li>
                </ul>
  }
  if(props.type === 'kartselect'){
    txt = "카트 선택."
    kartselect =  <ul className="kartselect">
                    <li>
                        <img className="kartimg" src="/img/image-tmi-kart-4.png" srcSet="/img/image-tmi-kart-4@2x.png 2x, /img/image-tmi-kart-4@3x.png 3x" alt="kart"/>
                        백기사X
                        <div className="sub">
                            <div className="first">
                                <img src="/img/icon-time-14.svg" alt="time" />
                                60’60’91
                                <img src="/img/icon-raceflag-14.svg" alt="raceflag" />
                                100%
                            </div>
                            <div className="second">
                                <img src="/img/icon-handle-14.svg" alt="handle"/>
                                999,999
                                <img src="/img/icon-crying-14.svg" alt="retire" />
                                100%
                            </div>
                        </div>
                    </li>
                </ul>
  }

  return (
    <div className={ props.active ? "raise mobile active" : "raise mobile" } >
        <div className="wrapper">
            <div className="bar" onClick={ props.raiseDown }></div>
            <img onClick={ props.raiseDown } src="/img/icon-close-16.svg" className="close" alt="close" />
            <div className="top">
                { txt }
            </div>
            <div>
                { platform }
                { kartselect }
            </div>
        </div>
    </div>
  );
}

export default withTranslation()(Raise);