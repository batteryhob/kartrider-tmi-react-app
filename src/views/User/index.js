import React from 'react';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

import Title from './components/Title';
import Analysis from './components/Analysis';
import Summary from './components/Summary';
import Match from './components/Match';

function User() {
  return (
    <section>
      <Header/>
        <div>
          <Title/>
          <Analysis/>
          <Summary/>
          <Match/>
        </div>
      <Footer/>
    </section>
  );
}

export default User;
