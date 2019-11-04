import React, {Component} from 'react';

import Header from './Header';
import Columns from './Columns';

class App extends Component{
  render(){
    return(
      <div className="home-wrap">
        <Header/>
        <div className="home-sections">
          <Columns/>
        </div>
      </div>
    )
  }
}

export default App;
