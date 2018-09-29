import React, { Component } from 'react';
import{CodeWrapper,Codetitle,CodeItemWrapper,CodeItemTitle,CodeItem} from './style';
import searchscreen from '../../statics/searchscreen.png';
import searchcode from '../../statics/searchcode.png';
import bgimg from '../../statics/bg.png';
class Showcode extends Component{

    render(){

        return(

            <CodeWrapper bg={bgimg}>
                <Codetitle>Coding Tutorial</Codetitle>
                <CodeItemTitle>Search Bar Functionality</CodeItemTitle>
                <CodeItemWrapper>
                    <CodeItem src={searchscreen}/>
                    <CodeItem src={searchcode}/>
                </CodeItemWrapper>


            </CodeWrapper>

        )

    }


}

export default Showcode;