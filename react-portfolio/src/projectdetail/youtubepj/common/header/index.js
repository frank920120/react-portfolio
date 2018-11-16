import React, { Component,Fragment } from 'react';
import {HomeNav,NavIcon,MenuWrapper} from './style';

class Header extends Component{


        render(){
            return (
            <Fragment>
                    <HomeNav>
                        <NavIcon>JUN FANG</NavIcon>
                        <MenuWrapper>
                            <a href='https://frankjunfang.com/youtubepj/' className='Highlight'>Watch Live Demo</a>
                        </MenuWrapper>
                
                    </HomeNav>
            </Fragment>
            );

        }
}


export default Header;