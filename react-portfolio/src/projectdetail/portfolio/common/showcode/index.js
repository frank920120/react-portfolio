import React, { Component } from 'react';
import{CodeWrapper,Codetitle,CodeItemWrapper,CodeItemTitle,CodeItem} from './style';
import code01 from '../../statics/code01.png';
import code02 from '../../statics/code02.png';
import showmore from '../../statics/showmore.png';
import bgimg from '../../statics/bg.png';
class Showcode extends Component{

    render(){

        return(

            <CodeWrapper bg={bgimg}>
                <Codetitle>Coding Tutorial</Codetitle>
                <CodeItemTitle>ShowMore & ShowLess Functionality</CodeItemTitle>
                <CodeItemWrapper >
                    <CodeItem src={showmore}/>
                    <CodeItem src={code01}/>
                    <CodeItem src={code02}/>
                </CodeItemWrapper>


            </CodeWrapper>

        )

    }


}

export default Showcode;