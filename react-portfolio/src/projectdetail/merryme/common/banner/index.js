import React, { Component} from 'react';
import {DescribeDiv,BannerWrapper,DesHeader,DesDiv,DesContent,DesSkillUl,DesItem,
    ToolDiv,ToolListUL,ToolListItem,ToolListImg,ToolTitle,BannerButton} from './style';
import html from '../../statics/html.svg';
import js from '../../statics/javascript.svg';
import ps from '../../statics/photoshop.svg';
import sass from '../../statics/sass.svg';
import wordpress from '../../statics/wordpress.svg';



class MerrymeBanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'MerryMe Wedding',
            skill:['RESPONSIVE','WEB DESIGN','WEB DEVELOPMENT'],
            des:"This is my first real client project in BCIT, liaised with clients of small to mid-size businesses including face-to-face meetings to identify needs and requirements in order to create innovative and targeted designs. Utilized well-developed listening skills to ensure the accuracy of communication. .",
            tooltitle:'TOOLKIT',
            toollist:[html,sass,js,wordpress,ps]
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
                    <BannerButton href='http://merrymewedding.bcitwebdeveloper.ca'>Watch live Demo</BannerButton>
                </ToolDiv>
            </DescribeDiv>
            </BannerWrapper>
        
        )


    }




}


export default MerrymeBanner;