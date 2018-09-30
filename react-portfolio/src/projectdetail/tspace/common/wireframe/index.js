import React, { Component } from 'react';
import {WireFrameWrapper,WireFrameHeader,WireFrameItemWrapper,WireFrameItem}from './style';
import wireframe01 from '../../statics/tspacewireframe01.jpeg';
import wireframe02 from '../../statics/tspacewireframe02.jpeg';
import wireframe03 from '../../statics/tspacewireframe03.jpeg';
import wireframe04 from '../../statics/tspacewireframe04.jpeg';
import wireframe05 from '../../statics/tspacewireframe05.jpeg';
import wireframe06 from '../../statics/tspacewireframe06.jpeg';
class Wireframe extends Component{


    render(){


        return(

            <WireFrameWrapper>
                    <WireFrameHeader>Website wireframe</WireFrameHeader>
            <WireFrameItemWrapper>
                    <WireFrameItem src={wireframe01}/>
                    <WireFrameItem src={wireframe02}/>
                    <WireFrameItem src={wireframe03}/>
                    <WireFrameItem src={wireframe04}/>
                    <WireFrameItem src={wireframe05}/>
                    <WireFrameItem src={wireframe06}/>
            </WireFrameItemWrapper>

            </WireFrameWrapper>


        )



    }




}

export default Wireframe;