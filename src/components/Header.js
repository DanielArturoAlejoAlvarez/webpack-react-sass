import React,{Component} from 'react';

import { Nav } from './Nav';

class Header extends Component {
  render(){
    return(
      <div>
        <div className="mobile-nav">
          <Nav/>
        </div>
        <header>
          <div className="header-position">
            <h1 className="logo">PewdiePie</h1>
            <nav className="site-nav">
              <Nav/>
            </nav>
            <a href="mailto:pewdiepie@gmail.com" className="email-link">+email me</a>
            <div className="mobile-nav-toggle">
              <span></span>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header;
