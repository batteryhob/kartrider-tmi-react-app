import React from 'react';

const Searchbar = ({ menu1, menu2, menu3, menu4 }) => {
    return (
        <div className="searchbar">
            <form onSubmit={ ()=>false }>
                <div className="contents">
                    <div className="select">
                        <label htmlFor="selectCategory">유저</label>
                        <select id="selectCategory">
                            <option value="유저">유저</option>
                            <option value="카트">카트</option>
                            <option value="트랙">트랙</option>
                        </select>
                    </div>
                    <input type="search" placeholder="유저 닉네임을 입력해주세요." />
                    <button className="btn">
                        <img src="/img/btn-magnifier-ver-2-22.png" srcSet="/img/btn-magnifier-ver-2-22@2x.png 2x, /img/btn-magnifier-ver-2-22@3x.png 3x" className="Btn_Magnifier_ver2_22" />
                    </button>
                    <div className="dao desktop">
                        <img src="/img/rolling-charactor.png"srcSet="/img/rolling-charactor@2x.png 2x, /img/rolling-charactor@3x.png 3x" className="#Rolling_charactor" />
                    </div>
                </div>
            </form>
            <div className="current">
                <div className="desc">
                    최근 검색어
                </div>
                <ul>
                    <li>
                        셀럽지민
                    </li>
                    <li>
                        셀럽지민
                    </li>
                    <li>
                        셀럽지민
                    </li>
                    <li>
                        셀럽지민
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Searchbar;
