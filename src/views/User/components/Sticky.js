import React from 'react';

const Sticky = (props) => {
  return (
    <div className="sticky mobile">
        <div className="contents">
            <div className="profile">        
                <img src="/img/profile-round.png" srcSet="/img/profile-round@2x.png 2x,
                /img/profile-round@3x.png 3x" alt="프로필" />
                <div className="name">
                    <p>LV.99</p>
                    <p className="nick">배터리호</p>
                </div>
            </div>
            <div className="menu-right">
                <img src="img/btn-magnifier-ver-2-22.png" srcSet="img/btn-magnifier-ver-2-22@2x.png 2x,
                img/btn-magnifier-ver-2-22@3x.png 3x" className="Btn_Magnifier_ver2_22" />
            </div>
        </div>
    </div>
  );
}

export default Sticky;
