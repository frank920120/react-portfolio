import React, { Component} from 'react';
import Banner from '../../statics/weatherBanner.jpg';
import {BannerImage,DescribeDiv,BannerWrapper,DesHeader,DesDiv,DesContent,DesSkillUl,DesItem,
    ToolDiv,ToolListUL,ToolListItem,ToolListImg,ToolTitle,BannerButton} from './style';
import html from '../../statics/html.svg';
import angular from '../../statics/angular.svg';
import css from '../../statics/css.svg';



class WeatherBanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'Weather Forecast',
            skill:['SINGLE PAGE','WEB DESIGN','WEB DEVELOPMENT'],
            des:"This Weather application is a simple web application that displays the weather report of numerous cities in the world.",
            tooltitle:'TOOLKIT',
            toollist:[html,css,angular]
        }
                


    }
    render(){

        return(
            <BannerWrapper>
            <BannerImage src={Banner}/>
            <DescribeDiv>
                <DesHeader>{this.state.title}</DesHeader>
                <DesDiv>
                <DesContent>{this.state.des}</DesContent>
                <DesSkillUl>
                    {
                      this.state.skill.map((item,index)=>{

                      return <DesItem key={index}>{item}</DesItem>

                      })      

                    }



                </DesSkillUl>
                </DesDiv>
                <ToolTitle>{this.state.tooltitle}</ToolTitle>
                <ToolDiv>

                    <ToolListUL>
                            {
                                this.state.toollist.map((item,index)=>{

                                    return (

                                        <ToolListItem key={index}>
                                            <ToolListImg src={item}></ToolListImg>
                                        </ToolListItem>


                                    )



                                })


                            }
                    </ToolListUL>
                    <BannerButton href='https://frankjunfang.com/weatherpj/'>Watch live Demo</BannerButton>
                </ToolDiv>
            </DescribeDiv>
            </BannerWrapper>
        
        )


    }




}


export default WeatherBanner;