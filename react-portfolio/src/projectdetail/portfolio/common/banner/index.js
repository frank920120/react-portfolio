import React, { Component} from 'react';
import {DescribeDiv,BannerWrapper,DesHeader,DesDiv,DesContent,DesSkillUl,DesItem,
    ToolDiv,ToolListUL,ToolListItem,ToolListImg,ToolTitle,BannerButton} from './style';
import html from '../../statics/html.svg';
import js from '../../statics/javascript.svg';
import ps from '../../statics/photoshop.svg';
import sass from '../../statics/sass.svg';
import react from '../../statics/react.svg';



class PortfolioBanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'MY PORTFOLIO',
            skill:['RESPONSIVE','WEB DESIGN','WEB DEVELOPMENT'],
            des:"This is my current portfolio page, which includes all the projects that I have done so far. And the reason I use ReactJS to complete this website is that React.js is a flexible and efficient front-end javascript library for building UI, and is considered the most in demand in the job markets in 2018. It’s also considered as one of the most popular javascript frameworks these days .",
            tooltitle:'TOOLKIT',
            toollist:[html,sass,js,react,ps]
        }
                


    }
    render(){

        return(
            <BannerWrapper>
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
                    <BannerButton>Watch live Demo</BannerButton>
                </ToolDiv>
            </DescribeDiv>
            </BannerWrapper>
        
        )


    }




}


export default PortfolioBanner;