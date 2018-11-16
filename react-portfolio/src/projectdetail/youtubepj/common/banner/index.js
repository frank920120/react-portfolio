import React, { Component} from 'react';
import Banner from '../../statics/youtubebanner.png';
import {BannerImage,DescribeDiv,BannerWrapper,DesHeader,DesDiv,DesContent,DesSkillUl,DesItem,
    ToolDiv,ToolListUL,ToolListItem,ToolListImg,ToolTitle,BannerButton} from './style';
import html from '../../statics/html.svg';
import react from '../../statics/react.svg';
import css from '../../statics/css.svg';



class YoutubeBanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'Youtube Data API',
            skill:['SINGLE PAGE','WEB DESIGN','WEB DEVELOPMENT'],
            des:"This Youtube application is a simple web application that displays the youtube videos from using Youtube Data API.",
            tooltitle:'TOOLKIT',
            toollist:[html,css,react]
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
                    <BannerButton href='https://frankjunfang.com/youtubepj/'>Watch live Demo</BannerButton>
                </ToolDiv>
            </DescribeDiv>
            </BannerWrapper>
        
        )


    }




}


export default YoutubeBanner;