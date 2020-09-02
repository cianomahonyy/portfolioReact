import React from 'react';
import './Home.css';
import Nav from './nav/Nav';

function Home() {
  return (
    <div className="App">
      <div class="starter-template">
        <img id="headshot" src="images/github.jpg" alt="Mountain View"/>
        <h1>Cian O Mahony</h1>
        <p class="lead">University College Cork</p>
          <Nav />
      </div>
    </div>


  );
}

export default Home;
