import React from 'react';
import './Design.css';
import Nav from './../home/nav/Nav';

function Design() {
  return (
    <div className="App">

      <Nav />
      
      <div class="container design-container">
        <div class="row">
            <div class="col-lg-4">
                <img src="images/karlguestbigscreen.jpg" class="design-picture2"/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <img src="images/rinodrive-secure.jpg" class="design-picture2"/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <img src="images/sequence.jpg" class="design-picture2"/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <img src="images/polybudgie.jpg" class="design-picture2"/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                    <img src="images/hashpointseq.jpg" class="design-picture2"/>
            </div>
        </div>
        <div class="row">
                <div class="col-lg-4">
                    <img src="images/rino.jpg" class="design-picture2"/>
                </div>
        </div>
        <div class="row">
                <div class="col-lg-4">
                        <img src="images/polysurf.jpg" class="design-picture2"/>
                </div>
        </div>
    </div>


    </div>


  );
}

export default Design;
