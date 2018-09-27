import React, { Component,Fragment } from 'react';
import {HeaderWrapper,HomeNav,NavIcon,MenuWrapper} from './style';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import HamburgerMenu from '../../../../statics/hamburger.svg';
class Header extends Component{


        render(){
            return (
            <Fragment>
                    <HomeNav>
                        <NavIcon>JUN FANG</NavIcon>
                        <MenuWrapper>
                            <AnchorLink href='#skill' className='Highlight'>Watch Live Demo</AnchorLink>
                        </MenuWrapper>
                
                    </HomeNav>
            </Fragment>
            );

        }
}


export default Header;