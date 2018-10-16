import React, { Component } from 'react';
import {WireFrameWrapper,WireFrameHeader,WireFrameItemWrapper,WireFrameItem}from './style';
import wireframe01 from '../../statics/merrymewireframe01.png';
import wireframe02 from '../../statics/merrymewireframe02.png';
import wireframe03 from '../../statics/merrymewireframe03.png';
import wireframe04 from '../../statics/merrymewireframe04.png';
import wireframe05 from '../../statics/merrymewireframe05.png';
import wireframe06 from '../../statics/merrymewireframe06.png';
import wireframe07 from '../../statics/merrymewireframe07.png';
import wireframe08 from '../../statics/merrymewireframe08.png';
import wireframe09 from '../../statics/merrymewireframe09.png';
import wireframe10 from '../../statics/merrymewireframe10.jpeg';
import wireframe11 from '../../statics/merrymewireframe11.jpeg';
import wireframe12 from '../../statics/merrymewireframe12.jpeg';
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
                    <WireFrameItem src={wireframe07}/>
                    <WireFrameItem src={wireframe08}/>
                    <WireFrameItem src={wireframe09}/>
                    <WireFrameItem src={wireframe10}/>
                    <WireFrameItem src={wireframe11}/>
                    <WireFrameItem src={wireframe12}/>
            </WireFrameItemWrapper>

            </WireFrameWrapper>


        )



    }




}

export default Wireframe;