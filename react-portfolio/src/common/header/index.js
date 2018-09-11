import React, { Component,Fragment } from 'react';
import {HeaderWrapper,HomeNav,NavIcon,MenuWrapper} from './style';
import AnchorLink from 'react-anchor-link-smooth-scroll';
class Header extends Component{
constructor(props){
super(props);
this.state = {

    scroll : false
}

this.handScroll = this.handScroll.bind(this);

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
        render(){
            return (
            <Fragment>
               <HeaderWrapper>
                </HeaderWrapper>
             
                    <HomeNav fix={this.state.scroll}>
                        <NavIcon fix={this.state.scroll}>JUN FANG</NavIcon>
                        <MenuWrapper>
                            <AnchorLink href='#project'>Projects</AnchorLink>
                            <AnchorLink href='#about'>About Me</AnchorLink>
                            <AnchorLink href='#skill' className='Highlight'>My Skills</AnchorLink>
                        </MenuWrapper>
                    </HomeNav>
            </Fragment>
            );

        }
}


export default Header;