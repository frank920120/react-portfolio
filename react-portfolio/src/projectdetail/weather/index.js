import React, { Component,Fragment } from 'react';
import Header from './common/header';
import WeatherBanner from '../weather/common/banner';
import DesignSection from './common/design';
import Footer from './common/footer';
class Weather extends Component{
    componentDidMount(){

        window.scrollTo(0,0);
    
    
      }
    render(){

        return(

        <Fragment>
            <Header/>
            <WeatherBanner/>
            <DesignSection/>
            <Footer/>
        </Fragment>
    
    )




    }
}
export default Weather;






