import React, { Component } from 'react';
import {ProjectWrapper,ProjectHead,ProjectHeadText,
    ProjectHeadWrapper,ProjectContent,ProjectItems,
    ProjectImg,ImgCover,ProjectTitle,ProjectIntro,
    ProjectSkill,ProjectButton,Redline,ShowMore} from './style';
import china from '../../statics/china.png';
import tspace from '../../statics/tspace.png';
import weather from '../../statics/weather.png';
import currentportoflio from '../../statics/currentportfolio.png';
import Fade from 'react-reveal/Fade';
// import {Link} from 'react-router-dom';


class ProjectSection  extends Component{

    constructor(props){
        super(props);
        this.state = {
            imgUrl :[china,tspace,currentportoflio,weather],
            isHover : [false,false,false,false],
            projectTitle : ['Country Project','Virtual Business Project','Current portfolio','Weather forecast'],
            projectIntro : [
                'China is a single page, responsive website for introducing China. ',
                'T-space is a Virtual Business page. ',
                'This is my current portfolio page which includes all my projects that I have done so far.',
                'The weather forecast is a single Angular page'
                ],
            ProjectSkill:[
                'Html | Scss | Javascript | Jquery | Responsive',
                'Html | Scss | Javascript | Jquery | Php | Mysql | Photoshop | XD | Responsive',
                'ReactJS | Styled-components | Photoshop | React-Router 4',
                'Angular | Angular Router | Ajax | OpenWeatherMap API | CSS3 | Responsive'
                
        
        ],
        url:['/countrydetail','/tspacedetail','/myportfoliodetail','/weatherdetail'],
        limit:2,
        maxiumLimit:false
        }

        this.ShowHandle = this.ShowHandle.bind(this);
        this.LessHandle = this.LessHandle.bind(this);
    }
    ShowHandle(){

        this.setState((prevState)=>{
          return {limit :prevState.limit+2}
        },()=>{
            if(this.state.limit>=4){
                this.setState({
                 maxiumLimit:true
             })
          }
        })
    }
    LessHandle(){
        this.setState((prevState)=>{
            return {limit :prevState.limit-2}
        },()=>{
            window.scrollTo(0,window.scrollY-600);
            if(this.state.limit<=2){
            this.setState({
                limit:2,
                maxiumLimit:false   
               })
            }
        })
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

             <ProjectWrapper id='project'>
                    <ProjectHeadWrapper>
                    <ProjectHead>Projects</ProjectHead>
                    <ProjectHeadText>Case studies of previous Web devloperment work. </ProjectHeadText>
                    </ProjectHeadWrapper>
                <ProjectContent>
                {
                        this.state.imgUrl.slice(0,this.state.limit).map((item,index)=>{

                        return   ( 
                        
                            <Fade key={index}  left>
                        <ProjectItems onMouseOver={this.handleHover.bind(this,index)}  key={index}  >

                                <ProjectImg  src={item}/>
                                <ImgCover onMouseOut={this.handleLeave.bind(this,index)} className={this.state.isHover[index]?'cover':""}>
                                    <ProjectTitle>{this.state.projectTitle[index]}</ProjectTitle>
                                    <ProjectIntro>{this.state.projectIntro[index]}</ProjectIntro>
                                    <ProjectSkill>{this.state.ProjectSkill[index]}</ProjectSkill>
                                    <ProjectButton to={this.state.url[index]}>View Detail</ProjectButton>
                                </ImgCover>
                        </ProjectItems>
                        </Fade>
                        )                               
                        })
                    }               
                </ProjectContent>
                <ShowMore onClick={this.state.maxiumLimit?this.LessHandle:this.ShowHandle}>{this.state.maxiumLimit?'ShowLess':'ShowMore'}</ShowMore>
                <Redline></Redline>
             </ProjectWrapper>

            )

    }

}
export default ProjectSection;