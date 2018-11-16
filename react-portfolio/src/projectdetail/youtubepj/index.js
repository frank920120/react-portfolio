import React, { Component,Fragment } from 'react';
import Header from './common/header';
import YoutubeBanner from '../youtubepj/common/banner';
import DesignSection from './common/design';
import Footer from './common/footer';
class YoutubePJ extends Component{
    componentDidMount(){

        window.scrollTo(0,0);
    
    
      }
    render(){

        return(

        <Fragment>
            <Header/>
            <YoutubeBanner/>
            <DesignSection/>
            <Footer/>
        </Fragment>
    
    )




    }
}
export default YoutubePJ;






