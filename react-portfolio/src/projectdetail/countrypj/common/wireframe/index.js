import React, { Component } from 'react';
import {WireFrameWrapper,WireFrameHeader,WireFrameItemWrapper,WireFrameItem}from './style';
import wireframe01 from '../../statics/chinawireframe01.jpg';
import wireframe02 from '../../statics/chinawireframe02.jpg';
class Wireframe extends Component{


    render(){


        return(

            <WireFrameWrapper>
                    <WireFrameHeader>Website wireframe</WireFrameHeader>
            <WireFrameItemWrapper>
                    <WireFrameItem src={wireframe01}/>
                    <WireFrameItem src={wireframe02}/>
            </WireFrameItemWrapper>

            </WireFrameWrapper>


        )



    }




}

export default Wireframe;