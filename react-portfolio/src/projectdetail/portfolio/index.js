import React, { Component,Fragment } from 'react';
import Header from './common/header';
import PortfolioBanner from '../portfolio/common/banner';
import ResponsiveSection from './common/responsive';
import ColorScheme from './common/colorscheme';
import DesignSection from './common/design';
import Showcode from './common/showcode';
import Footer from './common/footer';
class MyPortfolio extends Component{
  componentDidMount(){

    window.scrollTo(0,0);


  }
    render(){

        return(

        <Fragment>
            <Header/>
            <PortfolioBanner/>
            <ResponsiveSection/>
            <ColorScheme/>
            <DesignSection/>
            <Showcode/>
            <Footer/>
        </Fragment>
    
    )




    }
}
export default MyPortfolio;






