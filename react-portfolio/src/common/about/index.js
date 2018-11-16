import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {AboutWrapper,AboutHeadWrapper,AboutHead,AboutText,
    AboutContent,AboutLeft,AboutRight,AboutIntro,Highlight,Redline} from './style';
import Selfi from '../../statics/selfi.png';
class AboutMe extends Component {

    constructor(props){
        super(props);
        this.state = {

            ImageScroll : false,
            scrollTop:null

        }
this.handleScroll=this.handleScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);

    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    

    handleScroll(){
        const node = ReactDOM.findDOMNode(this.container);

        this.setState({
            scrollTop:document.body.scrollTop || document.documentElement.scrollTop

        },this.setState({

            ImageScroll : (this.state.scrollTop>node.offsetTop-200)

        }))
      
    }
    render(){

            return(

                <AboutWrapper ref={el=>this.container=el} id='about'>
                    <AboutHeadWrapper>
                        <AboutHead>ABOUT ME</AboutHead>
                        <AboutText>The man,the myth,the developer</AboutText>
                    </AboutHeadWrapper>
                    <AboutContent>
                        <AboutLeft>
                            <AboutIntro>My name is JUN FANG , I am from China ,and I am a <Highlight>front-end web developer</Highlight>.I graduated from the British Columbia Institution of Technology, Technical Web Designer Program. This program teaches hands-on and up-to-date web technologies with structured projects and industry experiences.  </AboutIntro>
                            <AboutIntro>I am a <Highlight>lifelong learner</Highlight> because I love learning new things. I always seek out new technologies, improve my skills, and stay up-to-date on industry trends and achievements.</AboutIntro>
                            <AboutIntro> I do <Highlight>web design and web development </Highlight>for solving people’s problems and creating amazing features with web design and web development is incredibly rewarding. </AboutIntro>
                            <AboutIntro>My source of <Highlight>inspiration</Highlight> comes from everything I see around me; it helps me to design state-of-the-art and user-friendly web and mobile interfaces.</AboutIntro>
                        </AboutLeft>
                        <AboutRight src={Selfi}  fadein={this.state.ImageScroll}/>
                    </AboutContent>
                    <Redline></Redline>
                </AboutWrapper>

            )
    }

}


export default AboutMe;