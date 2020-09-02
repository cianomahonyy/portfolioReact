import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="App">
      <div className="starter-template">
          <a href="/coding"><button type="button" className="btn btn-primary btn-coding">Coding</button></a>
          <a href="/design"><button type="button" href="/components/design" className="btn btn-primary btn-design">Design</button></a>
          <a href="images/cvtech.pdf"><button type="button" href="images/cvtech" className="btn btn-primary btn-cv">CV</button></a>
      </div>
    </div>


  );
}

export default Nav;
