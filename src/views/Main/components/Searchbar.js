import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// the hoc
import { withTranslation } from 'react-i18next';

@inject(stores => ({
  getUser: stores.userStore.getUser
}))

@observer
class Searchbar extends Component {

    constructor(props) {
        super(props);
        let { t } = this.props;
        this.state = {
            category: t("main.searchbar.category1"),
            keyword: "",
            currentKeywords: []
        };
    }

    componentDidMount(){
        //최근검색어
        let localKeywords = localStorage.getItem('currentKeywords')
        this.setState({
            currentKeywords : JSON.parse(localKeywords)
        })
    }

    /*핸들러*/
    _inputChange = (e) => {
        this.props.activeCheck(e.target.value);
        this.setState({
            keyword : e.target.value
        })
    }
    _selectChange = (e) => {
        this.setState({
            category : e.target.value
        })
    }

    /*펑션*/
    findNick = (el) => {

        let { t } = this.props;
        let { keyword, currentKeywords } = this.state;
        let temp = [...currentKeywords];

        //최근검색어
        if(typeof el === 'string')
            keyword = el;

        //벨리데이션
        if(keyword.trim() === '')
        {
            alert(t("main.searchbar.placeholder"));
            return
        }

        //유저찾기(API조회)
        this.props.getUser(keyword);


        //최근검색어세팅
        if(!currentKeywords.includes(keyword))
        {
            temp.unshift(keyword)
            if(temp.length > 5)
                temp.pop()
        }else{
            temp.splice(temp.indexOf(keyword),1)
            temp.unshift(keyword)
        }        
        this.setState({
            keyword: "",
            currentKeywords : temp
        })
        localStorage.setItem('currentKeywords', JSON.stringify(temp));
                

        //이동
        this.props.history.push({
            pathname: `/drift/user/${keyword}`
        })

    }
    removeCurrent = (el,e) => {
        e.stopPropagation();
    }
    
    render(){

        let { t }  = this.props;
        let { category, keyword, currentKeywords }  = this.state;

        let current;
        if(keyword.trim().length > 0 && currentKeywords.length > 0){
            current =   <div className="current">
                            <div className="desc">
                                {t("main.searchbar.recently")}
                            </div>
                            <ul>
                                {
                                    currentKeywords.map((el,i)=>{
                                        return(
                                            <li key={i} onClick={ ()=> this.findNick(el) }>
                                                { el }
                                                <img onClick={ (e)=> this.removeCurrent(el, e) } src="/img/icon-popupclose-14.png" 
                                                srcSet="/img/icon-popupclose-14@2x.png 2x, /img/icon-popupclose-14@3x.png 3x" 
                                                className="close" alt="remove"/>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
        }


        return (
            <div className={ "searchbar" }>
                <form onSubmit={ (e)=> { e.preventDefault() } }>
                    <div className="contents">
                        <div className="select">
                            <label htmlFor="selectCategory">{ category }</label>
                            <select id="selectCategory" onChange={ this._selectChange } defaultValue={t("main.searchbar.category1")}>
                                <option value={t("main.searchbar.category1")}>{t("main.searchbar.category1")}</option>
                                <option value={t("main.searchbar.category2")} disabled>{t("main.searchbar.category2")}</option>
                                <option value={t("main.searchbar.category3")} disabled>{t("main.searchbar.category3")}</option>
                            </select>
                        </div>
                        <input type="search" placeholder={t("main.searchbar.placeholder")} value={ keyword } onChange={ this._inputChange } />
                        <button className="btn" onClick={ this.findNick }>
                            <img src="/img/btn-magnifier-ver-2-22.png" srcSet="/img/btn-magnifier-ver-2-22@2x.png 2x, /img/btn-magnifier-ver-2-22@3x.png 3x" alt="search"/>
                        </button>
                        <div className="dao desktop">
                            <img src="/img/rolling-charactor.png"srcSet="/img/rolling-charactor@2x.png 2x, /img/rolling-charactor@3x.png 3x" alt="dao" />
                        </div>
                    </div>
                </form>
                { current }
            </div>
        )
    }

}

export default withTranslation()(Searchbar);
