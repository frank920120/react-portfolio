import React, { Component ,Fragment} from 'react';
import Header from './common/header';
import HomeBanner from './common/banner';
import ProjectSection from './common/projectSection';
import AboutMe from './common/about';
import MySkill from './common/skill';
class App extends Component {
  render() {
    return (
      <Fragment>
     <Header/>
     <HomeBanner/>
     <ProjectSection/>
     <AboutMe/>
     <MySkill/>
     </Fragment>
    );
  }
}

export default App;
