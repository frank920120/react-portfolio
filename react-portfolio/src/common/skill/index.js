import React, { Component,Fragment } from 'react';
import {SkillWrapper,SkillHeadWrapper,SkillHead,SkillText,
    SkillContent,SkillContentWrapper,SkillLogo,SkillTitle,SkillSelf,SkillSubtitle,
    SkillDescribe,SkillToolTitle,SkilTool,SkillToolItem} from './style';
import designLogo from '../../statics/design.svg';
import codeLogo from '../../statics/coding.svg';

class MySkill extends Component{

    constructor(props){
        super(props);
        this.state = {
            logo :[designLogo,codeLogo],
            title:['Desiger','Front-end Developer'],
            self : ['I value simple content structure, clean design patterns, and thoughtful interactions.','I tend to code things from scratch, and enjoy bringing ideas to life in the browser.'],
            subtitle:['Things I enjoy designing:','Languages I speak:'],
            skill:['UI, UX, Web, App','HTML, Css, Reactjs, Redux, Javascript, Jquery, Sass, PHP, WordPress'],
            ToolTitle:['Design Tools:','Dev Tools:'],
           ToolList:[
               ['Invision','PhotoShop','XD','Balsamiq'],
               ['Visual Studio Code','GitHub','Bootstrap','CodePen']
            ]
        }
    }

    render(){

            return (

                <SkillWrapper>
                    <SkillHeadWrapper>
                            <SkillHead>My SkillS</SkillHead>
                            <SkillText>The programming skills that I have learned.</SkillText>
                            </SkillHeadWrapper>
                            <SkillContentWrapper>

                          {

                this.state.logo.map((item,index)=>{

                    return(
                               
                    <SkillContent>
                        <SkillLogo src={item}/>
                        <SkillTitle>{this.state.title[index]}</SkillTitle>
                        <SkillSelf>{this.state.self[index]}</SkillSelf>
                        <SkillSubtitle>{this.state.subtitle[index]}</SkillSubtitle>
                        <SkillDescribe>{this.state.skill[index]}</SkillDescribe>
                        <SkillToolTitle>{this.state.ToolTitle[index]}</SkillToolTitle>
                        <SkilTool>
                            {this.state.ToolList[index].map((list,index)=>{

                            return (

                                <SkillToolItem>{list}</SkillToolItem>
                            ) 
                            })}
                        
                        </SkilTool>
                    </SkillContent>

                    )    
                })

                        
                          }  
                    </SkillContentWrapper>


                </SkillWrapper>


            )
    }

}

export default MySkill ;