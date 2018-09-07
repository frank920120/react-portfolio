import React, { Component ,Fragment} from 'react';
import Header from './common/header';
import HomeBanner from './common/banner';

class App extends Component {
  render() {
    return (
      <Fragment>
     <Header/>
     <HomeBanner/>
     </Fragment>
    );
  }
}

export default App;
