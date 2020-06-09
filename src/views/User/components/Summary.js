import React from 'react';

function Summary() {
  return (
    <div className="summary">
        <div className="contents">
            <div className="left">
                <div className="total">
                    <div className="small">
                        <p>종합 전적.</p>
                    </div>
                    <div className="big">
                        <p>500전 252승 248패</p>
                    </div>
                </div>
                <div className="platform desktop">
                    <div>
                        <p>플랫폼 이용 비율</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src="/img/icon-tmi-platform-pc-01.png"
                                srcSet="/img/icon-tmi-platform-pc-01@2x.png 2x,
                                        /img/icon-tmi-platform-pc-01@3x.png 3x"
                                className="Icon_tmi_platform_pc_01"/>
                                PC<span>100%</span>
                            </li>
                            <li>
                                <img src="/img/icon-tmi-platform-xbox-01.png"
                                srcSet="/img/icon-tmi-platform-xbox-01@2x.png 2x,
                                        /img/icon-tmi-platform-xbox-01@3x.png 3x"
                                className="Icon_tmi_platform_pc_01"/>
                                XBOX<span>100%</span>
                            </li>
                            <li>
                                <img src="/img/icon-tmi-platform-steam-01.png"
                                srcSet="/img/icon-tmi-platform-steam-01@2x.png 2x,
                                        img/icon-tmi-platform-steam-01@3x.png 3x"
                                className="/Icon_tmi_platform_pc_01"/>
                                Steam<span>100%</span>
                            </li>
                            <li>
                                <img src="/img/icon-tmi-platform-ps-01.png"
                                srcSet="/img/icon-tmi-platform-ps-01@2x.png 2x,
                                        /img/icon-tmi-platform-ps-01@3x.png 3x"
                                className="Icon_tmi_platform_pc_01" />
                                PS<span>100%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right">

                <div className="chart">
                    <div className="draw">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#00bc9b" />
                                    <stop offset="100%" stopColor="#5eaefd" />
                                </linearGradient>
                            </defs>
                            <circle cx="16" cy="16" r="15.9155" stroke="url(#gradient)"
                                className="progress-bar__background" />
                            <circle cx="16" cy="16" r="15.9155" stroke="url(#gradient)"
                                className="progress-bar__progress js-progress-bar" />
                        </svg>
                        <div className="icons">
                            <img src="/img/icon-tmi-trophy-01.svg" />
                            <div className="desktop">
                                <p>승률</p>
                                <p>50%</p>
                            </div>
                        </div>
                    </div>
                    <div className="desc mobile">
                        <p>승률</p>
                        <p>50%</p>
                    </div>
                </div>
                <div className="chart">
                    <div className="draw">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#00bc9b" />
                                    <stop offset="100%" stopColor="#5eaefd" />
                                </linearGradient>
                            </defs>
                            <circle cx="16" cy="16" r="15.9155" stroke="url(#gradient)"
                                className="progress-bar__background" />
                            <circle cx="16" cy="16" r="15.9155" stroke="url(#gradient)"
                                className="progress-bar__progress js-progress-bar" />
                        </svg>
                        <div className="icons">
                            <img src="/img/icon-tmi-checkflag-01.svg" />
                            <div className="desktop">
                                <p>완주율</p>
                                <p>50%</p>
                            </div>
                        </div>
                    </div>
                    <div className="desc mobile">
                        <p>완주율</p>
                        <p>50%</p>
                    </div>
                </div>
                <div className="chart">
                    <div className="draw">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#00bc9b" />
                                    <stop offset="100%" stopColor="#5eaefd" />
                                </linearGradient>
                            </defs>
                            <circle cx="16" cy="16" r="15.9155" stroke="url(#gradient)"
                                className="progress-bar__background" />
                            <circle cx="16" cy="16" r="15.9155" stroke="url(#gradient)"
                                className="progress-bar__progress js-progress-bar" />
                        </svg>
                        <div className="icons">
                            <img src="/img/icon-tmi-sademotion-01.svg" />
                            <div className="desktop">
                                <p>리타이어율</p>
                                <p>50%</p>
                            </div>
                        </div>
                    </div>
                    <div className="desc mobile">
                        <p>리타이어율</p>
                        <p>50%</p>
                    </div>
                </div>

            </div>
            <div className="bottom mobile">
                <div className="platform">
                    플랫폼 이용 비율
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Summary;
