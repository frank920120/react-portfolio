import React, { Component,Fragment } from 'react';
import Header from './common/header';
import Banner from '../tspace/common/banner';
import ResponsiveSection from './common/responsive';
class Tspace extends Component{

    render(){

        return(

        <Fragment>
            <Header/>
            <Banner/>
            <ResponsiveSection/>
        </Fragment>
    
    )




    }
}
export default Tspace;






