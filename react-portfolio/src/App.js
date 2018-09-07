import React, { Component ,Fragment} from 'react';
import Header from './common/header';
import HomeBanner from './common/banner';
import ProjectSection from './common/projectSection';
class App extends Component {
  render() {
    return (
      <Fragment>
     <Header/>
     <HomeBanner/>
     <ProjectSection/>
     </Fragment>
    );
  }
}

export default App;
