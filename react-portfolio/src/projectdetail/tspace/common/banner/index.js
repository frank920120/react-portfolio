import React, { Component} from 'react';
import TspaceBannerImg from '../../statics/tspaceBanner.jpg'
import {BannerImage,DescribeDiv,BannerWrapper,DesHeader,DesDiv,DesContent,DesSkillUl,DesItem,
    ToolDiv,ToolListUL,ToolListItem,ToolListImg,ToolTitle,BannerButton} from './style';
import html from '../../statics/html.svg';
import js from '../../statics/javascript.svg';
import php from '../../statics/php.svg';
import css from '../../statics/css.svg';
import mysql from '../../statics/mysql.svg';


class TspaceBanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'T-Space',
            skill:['RESPONSIVE','WEB DESIGN','WEB DEVELOPMENT'],
            des:"First group project in BCIT, worked on this project with one of my classmates.T-Space is a fictional Business Store, sells the virtual products on the Web such as headphones, watches and also glasses.",
            tooltitle:'TOOLKIT',
            toollist:[html,css,js,php,mysql]
        }
                


    }
    render(){

        return(
            <BannerWrapper>
            <BannerImage src={TspaceBannerImg}/>
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
                    <BannerButton href='https://frankjunfang.com/tspacepj/'>Watch live Demo</BannerButton>
                </ToolDiv>
            </DescribeDiv>
            </BannerWrapper>
        
        )


    }




}


export default TspaceBanner;