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
            des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
                    <BannerButton>Watch live Demo</BannerButton>
                </ToolDiv>
            </DescribeDiv>
            </BannerWrapper>
        
        )


    }




}


export default TspaceBanner;