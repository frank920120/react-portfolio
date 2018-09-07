import React, { Component,Fragment } from 'react';
import {HeaderWrapper,HomeNav,NavIcon,MenuWrapper,MenuItem} from './style';

class Header extends Component{
        render(){
            return (
            <Fragment>
               <HeaderWrapper>
                </HeaderWrapper>
             
                    <HomeNav>
                        <NavIcon>JUN FANG</NavIcon>
                        <MenuWrapper>
                            <MenuItem>About Me</MenuItem>
                            <MenuItem>Project</MenuItem>
                            <MenuItem className='Highlight'>Contact</MenuItem>
                        </MenuWrapper>
                    </HomeNav>
            </Fragment>
            );

        }
}


export default Header;