import React, { Component,Fragment} from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMobileAlt,faweixin } from '@fortawesome/free-solid-svg-icons'
import Header from './common/header';
import HomeBanner from './common/banner';
import ProjectSection from './common/projectSection';
import AboutMe from './common/about';
import MySkill from './common/skill';
import Footer from './common/footer';

// library.add(faMobileAlt,faweixin);

class App extends Component {

  
  render() {
    return (
      
      <Fragment>
     <Header/>
     <HomeBanner/>
    <ProjectSection/> 
     <AboutMe/>
     <MySkill/>
     <Footer/>   
     </Fragment>
    );
  }
}

export default App;
