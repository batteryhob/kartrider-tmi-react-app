import React from 'react';

const Sticky = ({ lv, nick, active }) => {
  return (
    <div className={ active ? "sticky mobile active" : "sticky mobile" }>
        <div className="contents">
            <div className="profile">        
                <img src="/img/profile-round.png" srcSet="/img/profile-round@2x.png 2x,
                /img/profile-round@3x.png 3x" alt="profile" />
                <div className="name">
                    <p>LV.{ lv }</p>
                    <p className="nick">{ nick }</p>
                </div>
            </div>
            <div className="menu-right">
                <img className="mobile" src="/img/btn-magnifier-ver-2-22.png" srcSet="/img/btn-magnifier-ver-2-22@2x.png 2x,
                /img/btn-magnifier-ver-2-22@3x.png 3x" alt="search"/>
            </div>
        </div>
    </div>
  );
}

export default Sticky;
