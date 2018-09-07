import React, { Component,Fragment } from 'react';
import {HeaderWrapper,HomeNav,NavIcon,MenuWrapper,MenuItem} from './style';

class Header extends Component{
constructor(props){
super(props);
this.state = {

    scroll : false
}

}
    componentDidMount() {
        window.addEventListener('scroll', ()=>{

                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            this.setState({

                 scroll : (scrollTop>80)

            })       
        });


      }
        render(){
            return (
            <Fragment>
               <HeaderWrapper>
                </HeaderWrapper>
             
                    <HomeNav fix={this.state.scroll}>
                        <NavIcon fix={this.state.scroll}>JUN FANG</NavIcon>
                        <MenuWrapper>
                            <MenuItem>About Me</MenuItem>
                            <MenuItem>Projects</MenuItem>
                            <MenuItem>Education</MenuItem>
                            <MenuItem className='Highlight'>Contact</MenuItem>
                        </MenuWrapper>
                    </HomeNav>
            </Fragment>
            );

        }
}


export default Header;