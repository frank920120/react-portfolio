import React, { Component} from 'react';
import{DesignSectionWrapper,DesignTitle,DesginImg,DesignImgWrapper}from './style';
import designabout from '../../statics/design01.png';


class DesignSection extends Component{


    render(){

            return(

                <DesignSectionWrapper>
                        <DesignTitle>Design Section</DesignTitle>
                    <DesignImgWrapper>
                        <DesginImg src={designabout}/>
                     
                        </DesignImgWrapper>
                </DesignSectionWrapper>

            )



    }



}
export default DesignSection;