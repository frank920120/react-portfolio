import React, { Component,Fragment } from 'react';
import {AboutWrapper,AboutHeadWrapper,AboutHead,AboutText,AboutContent,AboutLeft,AboutRight,AboutIntro} from './style';
import Selfi from '../../statics/selfi.jpg';
class AboutMe extends Component {

    constructor(props){
        super(props);
        this.state = {

            ImageScroll : false

        }

    }

    componentDidMount(){
        window.addEventListener('scroll', ()=>{

            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        this.setState({

            ImageScroll : (scrollTop>2000)

        })
    });




    }



    render(){

            return(

                <AboutWrapper>
                    <AboutHeadWrapper>
                        <AboutHead>ABOUT ME</AboutHead>
                        <AboutText>The man,the myth,the developer</AboutText>
                    </AboutHeadWrapper>
                    <AboutContent>
                        <AboutLeft>
                            <AboutIntro>My name is JUN FANG , I am from China ,and I am a front-end web developer.I graduated from the British Columbia Institution of Technology, Technical Web Designer Program. This program teaches hands-on and up-to-date web technologies with structured projects and industry experiences.  </AboutIntro>
                            <AboutIntro>I am a lifelong learner because I love learning new things. I always seek out new technologies, improve my skills, and stay up-to-date on industry trends and achievements.</AboutIntro>
                            <AboutIntro> I do web design and web development for solving people’s problems and creating amazing features with web design and web development is incredibly rewarding. </AboutIntro>
                            <AboutIntro>My source of inspiration comes from everything I see around me; it helps me to design state-of-the-art and user-friendly web and mobile interfaces.</AboutIntro>
                        </AboutLeft>
                        <AboutRight src={Selfi}  fadein={this.state.ImageScroll}/>
                    </AboutContent>
                </AboutWrapper>

            )
    }

}


export default AboutMe;