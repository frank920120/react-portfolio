import React, { Component,Fragment } from 'react';
import {ProjectWrapper,ProjectHead,ProjectHeadText,ProjectHeadWrapper,ProjectContent,ProjectItems,ProjectImg,ImgCover} from './style';

import china from '../../statics/china.png';
import tspace from '../../statics/tspace.png';
import weather from '../../statics/weather.png';
import currentportoflio from '../../statics/currentportfolio.png';




class ProjectSection  extends Component{

    constructor(props){
        super(props);
        this.state = {
            imgUrl :[china,tspace,weather,currentportoflio],
            isHover : [false,false,false,false,false]
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


                        return   ( <ProjectItems key={index} onMouseEnter={this.handleHover.bind(this,index)}  onMouseLeave={this.handleLeave.bind(this,index)} >

                                <ProjectImg src={item}/>
                                <ImgCover className={this.state.isHover[index]?'cover':""}></ImgCover>
                        </ProjectItems>)


                        })
                    }
                </ProjectContent>
                 


             </ProjectWrapper>

            )

    }

}
export default ProjectSection;