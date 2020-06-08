import React from 'react';

const Header = ({ menu1, menu2, menu3, menu4 }) => {
  return (
    <header>
        <div className="contents">
            <i className="fas fa-home"></i>
            <div className="menu-center desktop">
                <ul>
                    <li className="active">
                     { menu1 }
                    </li>
                    <li>
                     { menu2 }
                    </li>
                    <li>
                     { menu3 }
                    </li>
                    <li>
                     { menu4 }
                    </li>
                </ul>
                <div className="underbar">
                </div>
            </div>
            <div className="menu-right">
                <i className="fas fa-search"></i>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </header>
  );
}

export default Header;
