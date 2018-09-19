import React, { Component,Fragment } from 'react';
import {HeaderWrapper,HomeNav,NavIcon,MenuWrapper,Hamburger} from './style';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HamburgerMenu from '../../../../statics/hamburger.svg';
class Header extends Component{
constructor(props){
super(props);
this.state = {

    hamburgermenu:false
}

this.menuhandle = this.menuhandle.bind(this);

}
  

      menuhandle(){
        if(!this.state.hamburgermenu){

            this.setState({

                hamburgermenu:true,
             
            })
        }else{

            this.setState({

                hamburgermenu:false,
            

            })


        }

      }


        render(){
            return (
            <Fragment>
                    <HomeNav>
                        <NavIcon>JUN FANG</NavIcon>
                        <MenuWrapper hamburgerControl={this.state.hamburgermenu}>
                            <AnchorLink href='#project'>Projects</AnchorLink>
                            <AnchorLink href='#about'>About Me</AnchorLink>
                            <AnchorLink href='#skill' className='Highlight'>My Skills</AnchorLink>
                        </MenuWrapper>
                    <Hamburger onClick={this.menuhandle}  src={HamburgerMenu}/>
                    </HomeNav>
            </Fragment>
            );

        }
}


export default Header;