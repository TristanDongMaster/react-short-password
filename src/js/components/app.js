
import React from 'react';
import ReactDOM from 'react-dom';

import ShortSDK from './react-shortPw.js';

import '../../sass/_main.scss'

class App extends React.Component {

  shortSDK(pw, len) {
    if (len === 6) console.log(pw)
  }

  render(){

    return(
      <div>
        <br/>
        <ShortSDK
          limit={6}
          callBack={this.shortSDK.bind(this)}
        />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("app"))
