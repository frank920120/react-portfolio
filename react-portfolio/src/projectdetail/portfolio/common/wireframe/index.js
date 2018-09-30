import React, { Component } from 'react';
import {WireFrameWrapper,WireFrameHeader,WireFrameItemWrapper,WireFrameItem}from './style';
import wireframe01 from '../../statics/portfoliowireframe01.jpeg';
import wireframe02 from '../../statics/portfoliowireframe02.jpeg';
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