import React, { Component } from 'react';
import{CodeWrapper,Codetitle,CodeItemWrapper,CodeItemTitle,CodeItem} from './style';
// import searchscreen from '../../statics/searchscreen.png';
// import searchcode from '../../statics/searchcode.png';
class Showcode extends Component{

    render(){

        return(

            <CodeWrapper>
                <Codetitle>Show Code</Codetitle>
                <CodeItemTitle>Search Bar Functionality</CodeItemTitle>
                <CodeItemWrapper>
                    {/* <CodeItem src={searchscreen}/>
                    <CodeItem src={searchcode}/> */}
                </CodeItemWrapper>


            </CodeWrapper>

        )

    }


}

export default Showcode;