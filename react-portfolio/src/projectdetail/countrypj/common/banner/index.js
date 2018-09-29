import React, { Component} from 'react';
import CountryBannerImg from '../../statics/countryBanner.jpg'
import {BannerImage,DescribeDiv,BannerWrapper,DesHeader,DesDiv,DesContent,DesSkillUl,DesItem,
    ToolDiv,ToolListUL,ToolListItem,ToolListImg,ToolTitle,BannerButton} from './style';
import html from '../../statics/html.svg';
import js from '../../statics/javascript.svg';
import css from '../../statics/css.svg';
import ps from '../../statics/photoshop.svg'



class TspaceBanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'COUNTRY PROJECT',
            skill:['RESPONSIVE','WEB DESIGN','WEB DEVELOPMENT'],
            des:"This is my first project in BCIT,China is a fully responsive website for introducing China. The objective of this website project is to deliver general information about China with an eye-catching design. The theme, color, and design of the website are inspired by the traditional China mood.",
            tooltitle:'TOOLKIT',
            toollist:[html,css,js,ps]
        }
                


    }
    render(){

        return(
            <BannerWrapper>
            <BannerImage src={CountryBannerImg}/>
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
                    <BannerButton href='https://frankjunfang.com/countrypj'>Watch live Demo</BannerButton>
                </ToolDiv>
            </DescribeDiv>
            </BannerWrapper>
        
        )


    }




}


export default TspaceBanner;