import React, { Component} from 'react';
import{DesignSectionWrapper,DesignTitle,DesginImg,DesignImgWrapper}from './style';
import designabout01 from '../../statics/design01.png';
import designabout02 from '../../statics/design02.png';
import designabout03 from '../../statics/design03.png';
import designabout04 from '../../statics/design04.png';


class DesignSection extends Component{


    render(){

            return(

                <DesignSectionWrapper>
                        <DesignTitle>Design Section</DesignTitle>
                    <DesignImgWrapper>
                        <DesginImg src={designabout01}/>
                        <DesginImg src={designabout02}/>
                        <DesginImg src={designabout03}/>
                        <DesginImg src={designabout04}/>
                        </DesignImgWrapper>
                </DesignSectionWrapper>

            )



    }



}
export default DesignSection;