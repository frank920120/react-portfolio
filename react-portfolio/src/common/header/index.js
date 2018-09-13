import React, { Component,Fragment } from 'react';
import {HeaderWrapper,HomeNav,NavIcon,MenuWrapper,Hamburger} from './style';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HamburgerMenu from '../../statics/hamburger.svg';
class Header extends Component{
constructor(props){
super(props);
this.state = {

    scroll : false,
    hamburgermenu:false
}

this.handScroll = this.handScroll.bind(this);
this.menuhandle = this.menuhandle.bind(this);

}
    componentDidMount() {
      
        window.addEventListener('scroll',this.handScroll);
      }
  
      handScroll(){

          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        this.setState({

             scroll : (scrollTop>80)

        })       

      }
      menuhandle(){
        if(!this.state.hamburgermenu){

            this.setState({

                hamburgermenu:true,
                scroll : false
            })
        }else{

            this.setState({

                hamburgermenu:false,
                scroll : false

            })


        }

      }


        render(){
            return (
            <Fragment>
               <HeaderWrapper>
                </HeaderWrapper>
             
                    <HomeNav fix={this.state.scroll}>
                        <NavIcon fix={this.state.scroll}>JUN FANG</NavIcon>
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