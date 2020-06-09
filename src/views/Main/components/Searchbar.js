import React, { Component } from 'react';


class Searchbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: "유저",
            keyword: "",
            currentKeywords: [],
        };
    }

    inputChange = (e) => {
        this.setState({
            keyword : e.target.value
        })
    }

    selectChange = (e) => {
        this.setState({
            category : e.target.value
        })
    }


    render(){

        let { category, keyword }  = this.state;

        let current;
        if(keyword.trim().length > 0){
            current =   <div className="current">
                            <div className="desc">
                                최근 검색어
                            </div>
                            <ul>
                                <li>
                                    셀럽지민
                                </li>
                            </ul>
                        </div>
        }


        return (
            <div className={ "searchbar" }>
                <form onSubmit={ (e)=> { e.preventDefault() } }>
                    <div className="contents">
                        <div className="select">
                            <label htmlFor="selectCategory">{ category }</label>
                            <select id="selectCategory" onChange={ this.selectChange } defaultValue="유저">
                                <option value="유저">유저</option>
                                <option value="카트" disabled>카트</option>
                                <option value="트랙" disabled>트랙</option>
                            </select>
                        </div>
                        <input type="search" placeholder="유저 닉네임을 입력해주세요." defaultValue={ keyword } onChange={ this.inputChange }/>
                        <button className="btn">
                            <img src="/img/btn-magnifier-ver-2-22.png" srcSet="/img/btn-magnifier-ver-2-22@2x.png 2x, /img/btn-magnifier-ver-2-22@3x.png 3x" className="Btn_Magnifier_ver2_22" />
                        </button>
                        <div className="dao desktop">
                            <img src="/img/rolling-charactor.png"srcSet="/img/rolling-charactor@2x.png 2x, /img/rolling-charactor@3x.png 3x" className="#Rolling_charactor" />
                        </div>
                    </div>
                </form>
                { current }
            </div>
        )
    }

}

export default Searchbar;
