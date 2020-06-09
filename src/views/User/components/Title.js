import React from 'react';

function Title() {
  return (
    <div className="title">
        <div className="name">
            <div className="lv">
                <div className="level">
                    <p>LV.99</p>
                </div>
                <div className="nickname">
                    <p>Stella동댜S</p>
                </div>
            </div>
            <div className="sub">
                <div className="point">
                    <p>누적포인트<span>1,000PT</span></p>
                </div>
                <div className="rank">
                    <p>순위<span>1위</span></p>
                </div>
            </div>
            <div className="share">
                <ul>
                    <li>
                        <i className="svg-icon svg-icon-share-14 svg-icon-share-14-dims">
                        </i>
                        <span className="desktop">공유하기</span>
                    </li>
                    <li>
                        <i className="svg-icon svg-icon-important-ver-2-14 svg-icon-important-ver-2-14-dims">
                        </i>
                        <span className="desktop">신고하기</span>
                    </li>
                    <li>
                        <i className="svg-icon svg-icon-view-14 svg-icon-view-14-dims">
                        </i>
                        <span>12</span>
                    </li>
                </ul>
            </div>
            <div className="searchbar desktop">
                <input type="text" placeholder="검색" />
                <button>
                    <img src="/img/btn-magnifier-ver-2-22.png" srcSet="/img/btn-magnifier-ver-2-22@2x.png 2x,
                    /img/btn-magnifier-ver-2-22@3x.png 3x" className="Btn_Magnifier_ver2_22" />
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

export default Title;
