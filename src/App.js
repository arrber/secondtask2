import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [active, setActive] = useState(false);

  const openAccordion = () => {
    if(active == false){
      setActive(true);
    }
    else{
      setActive(false);
    }
  }

  return (
    <div className="app">
      <div className="accordion-holder">
        <div onClick={openAccordion} className="accordion">Why park a domain name in Parkname?<span className="arrow">{active ? "^" : "˅"}</span>
          {
            active &&
            <p className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quis illum facere tempora dolore minus voluptas omnis quidem reiciendis expedita amet odio, qui, 
              quasi at magni est in sint, voluptates consectetur.
            </p>
          }
        </div>
      </div>
    </div>
  );
};

export default App;