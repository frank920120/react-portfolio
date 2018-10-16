import React, { Component,Fragment } from 'react';
import Header from './common/header';
import MerrymeBanner from '../merryme/common/banner';
import ResponsiveSection from './common/responsive';
import ColorScheme from './common/colorscheme';
import DesignSection from './common/design';
import Showcode from './common/showcode';
import Footer from './common/footer';
import Wireframe from './common/wireframe';
class Merryme extends Component{
  componentDidMount(){

    window.scrollTo(0,0);


  }
    render(){

        return(

        <Fragment>
            <Header/>
            <MerrymeBanner/>
            <ResponsiveSection/>
            <ColorScheme/>
            <DesignSection/>
            <Showcode/>
            <Wireframe/>
            <Footer/>
        </Fragment>
    
    )




    }
}
export default Merryme;






