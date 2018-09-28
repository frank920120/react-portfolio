import React, { Component,Fragment} from 'react';
import {ColorSchemeWrapper,ColorSchemeItemWrapper,ColorSchemeTitle,ColorSchemeItem,ColorSchemeItemHeader} from './style';
class ColorScheme extends Component{
    constructor(props){
    super(props);
    this.state = {

        colorscheme:['#1b1313','#6d4436','#9c0b0b']
    }


    }
    render(){

            return (
               <Fragment>
                    <ColorSchemeTitle>Color Scheme</ColorSchemeTitle>
                <ColorSchemeWrapper>
                       
                
                        {
                            this.state.colorscheme.map((item,index)=>{

                                    return (
                                        <ColorSchemeItemWrapper>
                                        <ColorSchemeItemHeader>{item}</ColorSchemeItemHeader>
                                        <ColorSchemeItem style={{background:item}}></ColorSchemeItem>
                                        </ColorSchemeItemWrapper>
                                    )
                            })


                        }
                  
                </ColorSchemeWrapper>
</Fragment>

            )

    }

}

export default ColorScheme;