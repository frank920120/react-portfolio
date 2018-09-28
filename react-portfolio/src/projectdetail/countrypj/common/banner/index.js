import React, { Component,Fragment} from 'react';
import CountryBannerImg from '../../statics/countryBanner.jpg'
import {BannerImage,DescribeDiv,BannerWrapper,DesHeader,DesDiv,DesContent,DesSkillUl,DesItem,
    ToolDiv,ToolListUL,ToolListItem,ToolListImg,ToolTitle,BannerButton} from './style';
import html from '../../statics/html.svg';
import js from '../../statics/javascript.png';
import css from '../../statics/css.svg';
import ps from '../../statics/photoshop.svg'



class TspaceBanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'COUNTRY PROJECT',
            skill:['RESPONSIVE','WEB DESIGN','WEB DEVELOPMENT'],
            des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
                    <BannerButton>Watch live Demo</BannerButton>
                </ToolDiv>
            </DescribeDiv>
            </BannerWrapper>
        
        )


    }




}


export default TspaceBanner;