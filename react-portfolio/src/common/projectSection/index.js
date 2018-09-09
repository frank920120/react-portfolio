import React, { Component,Fragment } from 'react';
import {ProjectWrapper,ProjectHead,ProjectHeadText,
    ProjectHeadWrapper,ProjectContent,ProjectItems,
    ProjectImg,ImgCover,ProjectTitle,ProjectIntro,
    ProjectSkill,ProjectButton,Redline} from './style';

import china from '../../statics/china.png';
import tspace from '../../statics/tspace.png';
import weather from '../../statics/weather.png';
import currentportoflio from '../../statics/currentportfolio.png';




class ProjectSection  extends Component{

    constructor(props){
        super(props);
        this.state = {
            imgUrl :[china,tspace,weather,currentportoflio],
            isHover : [false,false,false,false],
            projectTitle : ['Country Project','Virtual Business Project','Weather forecast','Current portfolio'],
            projectIntro : [
                'China is a single page, responsive website for introducing China. The objective of this website project is to deliver general information about China with an eye-catching design. The theme, color, and design of the website are inspired by the traditional China mood.',
                'T-space is a Virtual Business page, The objective of this website is to sell watches,glasses, and headphones. Also, users are able to search for products.Sign up and Sign in is functional. ',
                'The weather forecast is a single page, Users are able to Search the weathers for all the countries, and they also can switch the temperature between Fahrenheit degree and Centigrade degree. The detailed information shows the weather in the following 10 days .', 
                'This is my current portfolio page which includes all my projects that I have done so far.'
                ],
            ProjectSkill:[
                'Html | Scss | Javascript | Jquery',
                'Html | Scss | Javascript | Jquery | Php | Mysql | Photoshop | XD',
                'Angular | Angular Router | Ajax | OpenWeatherMap API | CSS3',
                'ReactJS | Styled-components | Photoshop |'
        
        ]
        }

    }

 
    handleHover(i){
        const items =[...this.state.isHover];
        items[i]=true;
        this.setState({

            isHover :items
        })
      

    }

    handleLeave(i){
        const items =[...this.state.isHover];
        items[i]=false;

      this.setState({

            isHover :items
        })
     
    }
    render(){

            return (

             <ProjectWrapper>
                    <ProjectHeadWrapper>
                    <ProjectHead>Projects</ProjectHead>
                    <ProjectHeadText>Case studies of previous Web devloperment work. </ProjectHeadText>
                    </ProjectHeadWrapper>
                <ProjectContent>
                {
                        this.state.imgUrl.map((item,index)=>{


                        return   ( <ProjectItems onMouseOver={this.handleHover.bind(this,index)}  key={index}  >

                                <ProjectImg  src={item}/>
                                <ImgCover onMouseOut={this.handleLeave.bind(this,index)} className={this.state.isHover[index]?'cover':""}>
                                    <ProjectTitle>{this.state.projectTitle[index]}</ProjectTitle>
                                    <ProjectIntro>{this.state.projectIntro[index]}</ProjectIntro>
                                    <ProjectSkill>{this.state.ProjectSkill[index]}</ProjectSkill>
                                    <ProjectButton>Watch Live Demo</ProjectButton>
                                </ImgCover>
                        </ProjectItems>)


                        })
                    }
                    
                </ProjectContent>
                 

                <Redline></Redline>
             </ProjectWrapper>

            )

    }

}
export default ProjectSection;