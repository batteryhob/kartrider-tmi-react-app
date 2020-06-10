import React, { Fragment } from 'react';

const Bgs = ({ menu1, menu2, menu3, menu4 }) => {
    return (
        <Fragment>
            <div className="bg-left-top">
            </div>
            <div className="bg-right-top">
            </div>
            <div className="bg-left-bottom">
            </div>
            <div className="bg-right-bottom">
            </div>
            <div className="bg-point">
            </div>
            <div className="bg-dao mobile">
            </div>
            <div className="bg">
                <img src="/img/search-bg.png"
                    srcSet="/img/search-bg@2x.png 2x,
                    /img/search-bg@3x.png 3x"
                    className="#Search-bg" alt="bg" />
            </div>
        </Fragment>
    );
}

export default Bgs;
