import React, { Component } from 'react';
import{CodeWrapper,Codetitle,CodeItemWrapper,CodeItemTitle,CodeItem} from './style';
import code01 from '../../statics/code01.png';
import code02 from '../../statics/code02.png';
import code03 from '../../statics/code03.png';
import bgimg from '../../statics/bg.png';
class Showcode extends Component{

    render(){

        return(

            <CodeWrapper bg={bgimg}>
                <Codetitle>Coding Tutorial</Codetitle>
                <CodeItemTitle>Social Meida Option Page</CodeItemTitle>
                <CodeItemWrapper >
                    <CodeItem src={code01}/>
                    <CodeItem src={code02}/>
                    <CodeItem src={code03}/>
                </CodeItemWrapper>


            </CodeWrapper>

        )

    }


}

export default Showcode;