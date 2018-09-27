import React, { Component } from 'react';
import {ResponsiveWrapper,ResponsiveHeader,ImageWrapper,ImageItem} from './style';
import phoneview from '../../statics/phone.png';
import ipadview from '../../statics/ipad.png';
import labtopview from '../../statics/labtop.png';


class ResponsiveSection extends Component{

    render(){


        return (

            <ResponsiveWrapper>
            <ResponsiveHeader>Responsive Section</ResponsiveHeader> 
            <ImageWrapper>
          <ImageItem className="phoneview" src={phoneview}/>
          <ImageItem className="ipadview" src={ipadview}/>
          <ImageItem className="labtopview" src={labtopview}/>

            </ImageWrapper>
            </ResponsiveWrapper>

        )

    }


}

export default ResponsiveSection;