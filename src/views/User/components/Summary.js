import React, { useEffect, useState } from "react";
import { TweenLite } from "gsap";

import { withTranslation } from 'react-i18next';

const myObject = {
    totalValue: 0,
    winValue: 0,
    loseValue: 0,

    winRate: 0,
    rate: 0,
    retireRate: 0
};

function Summary(props) {

    const [total,  setTotal] = useState(props.total);
    const [win, setWin] = useState(props.win);
    const [lose, setLose] = useState(props.lose);

    const [winrate,  setWinRate] = useState(props.winrate);
    const [rate, setRate] = useState(props.rate);
    const [retirerate, setRetireRate] = useState(props.retirerate);

    const [computedWinrate,  setComputeWinRate] = useState(props.winrate);
    const [computedRate,  setComputedRate] = useState(props.rate);
    const [computedRetireRate,  setComputedRetireRate] = useState(props.retirerate);

    useEffect(() => {
        TweenLite.to(myObject, .3 , {
            totalValue: props.total,
            roundProps: "totalValue",
            onUpdate: () => {
                setTotal(myObject.totalValue);
            }
        });
    }, [props.total]);
    useEffect(() => {
        TweenLite.to(myObject, .3 , {
            winValue: props.win,
            roundProps: "winValue",
            onUpdate: () => {
                setWin(myObject.winValue);
            }
        });
    }, [props.win]);
    useEffect(() => {
        TweenLite.to(myObject, .3 , {
            loseValue: props.lose,
            roundProps: "loseValue",
            onUpdate: () => {
                setLose(myObject.loseValue);
            }
        });
    }, [props.lose]);

    useEffect(() => {
        TweenLite.to(myObject, .7 , {
            winRate: props.winrate,
            roundProps: "winRate",
            onUpdate: () => {
                setWinRate(myObject.winRate);
            }
        });
    }, [props.winrate]);
    useEffect(() => {
        TweenLite.to(myObject, .7 , {
            rate: props.rate,
            roundProps: "rate",
            onUpdate: () => {
                setRate(myObject.rate);
            }
        });
    }, [props.rate]);
    useEffect(() => {
        TweenLite.to(myObject, .7 , {
            retireRate: props.retirerate,
            roundProps: "retireRate",
            onUpdate: () => {
                setRetireRate(myObject.retireRate);
            }
        });
    }, [props.retirerate]);

    useEffect(() => {
        let strokeDashOffsetValue = 100 - props.winrate;
        setComputeWinRate(strokeDashOffsetValue)
    }, [props.winrate]);
    useEffect(() => {
        let strokeDashOffsetValue = 100 - props.rate;
        setComputedRate(strokeDashOffsetValue)
    }, [props.rate]);
    useEffect(() => {
        let strokeDashOffsetValue = 100 - props.retirerate;
        setComputedRetireRate(strokeDashOffsetValue)
    }, [props.retirerate]);

    return (
        <div className="summary">
            <div className="contents">
                <div className="left">
                    <div className="total">
                        <div className="small"> 
                            <p>{props.t('user.summary.title')}</p>
                        </div>
                        <div className="big">
                            <p>{total}{props.t('user.summary.match')} {win}{props.t('user.summary.win')} {lose}{props.t('user.summary.lose')}</p>
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
                                    className="Icon_tmi_platform_pc_01" alt="ps"/>
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
                                    className="progress-bar__progress js-progress-bar" style={{ "strokeDashoffset" : computedWinrate }} />
                            </svg>
                            <div className="icons">
                                <img src="/img/icon-tmi-trophy-01.svg" alt="winrate"/>
                                <div className="desktop">
                                    <p>승률</p>
                                    <p>{ winrate }%</p>
                                </div>
                            </div>
                        </div>
                        <div className="desc mobile">
                            <p>승률</p>
                            <p>{ winrate }%</p>
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
                                    className="progress-bar__progress js-progress-bar" style={{ "strokeDashoffset" : computedRate }} />
                            </svg>
                            <div className="icons">
                                <img src="/img/icon-tmi-checkflag-01.svg" alt="rate"/>
                                <div className="desktop">
                                    <p>완주율</p>
                                    <p>{ rate }%</p>
                                </div>
                            </div>
                        </div>
                        <div className="desc mobile">
                            <p>완주율</p>
                            <p>{ rate }%</p>
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
                                    className="progress-bar__progress js-progress-bar" style={{ "strokeDashoffset" : computedRetireRate }} />
                            </svg>
                            <div className="icons">
                                <img src="/img/icon-tmi-sademotion-01.svg" alt="retirerate" />
                                <div className="desktop">
                                    <p>리타이어율</p>
                                    <p>{ retirerate }%</p>
                                </div>
                            </div>
                        </div>
                        <div className="desc mobile">
                            <p>리타이어율</p>
                            <p>{ retirerate }%</p>
                        </div>
                    </div>

                </div>
                <div className="bottom mobile" onClick={ ()=> props.raiseUp(true, 'platform')} >
                    <div className="platform">
                        플랫폼 이용 비율
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Summary);
