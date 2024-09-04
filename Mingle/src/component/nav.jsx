import React, { useState } from 'react';
import './nav.css';
import theme from './images/theme.png' 
const Nav = () => {
  const [Theme,setTheme]=useState(false)
  const ToggleTheme=()=>{
    setTheme(!Theme)
    
  }
  return (
    <header>
      <div className="logo">
        <span>Mingle</span>
      </div>
      <nav>
        <div className="serch-inp-div">
            <input type="search" placeholder='Serch People'/>
        </div>
        <ul>
          <li><a><div className="theme"><div className="img"><img src={theme} alt="theme" width="30px" height="30px" /></div><div className="btn"><button id='btn'>Theme</button></div></div></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
