import React from 'react';

import Header from '../../shared/Header';

import Sticky from './components/Sticky';
import Footer from './components/Footer';

import Title from './components/Title';
import Summary from './components/Summary';
import Record from './components/Record';
import Matches from './components/Matches';

import './user.css'

function User() {
  return (
    <div id="user">
      <Header menu1='검색' menu2='랭킹' menu3='카트' menu4='트랙'/>
      <Sticky/>
        <main>
          <Title/>
          <section>
              <div className="mode">
                  <ul>
                      <li>
                          <span className="active">개인전</span>
                      </li>
                      <li>
                          <span>팀전</span>
                      </li>
                  </ul>
              </div>
              <Summary/>
              <Record/>
              <Matches/>
          </section>
        </main>
      <Footer/>
    </div>
  );
}

export default User;
