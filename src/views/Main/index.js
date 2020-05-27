import React from 'react';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

function Main() {
  return (
    <section>
      <Header/>
        <div>
          메인
          <input type="text" placeholder=""/>
        </div>
      <Footer/>
    </section>
  );
}

export default Main;
