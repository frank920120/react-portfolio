import React, { Component } from 'react';
import {FooterWrapper,ContactWrapper,ContactInfo,SocialMediaWrapper,SocialMediaItem,SocialMediaItemLink} from './style';
import EmailIcon from '../../statics/email.svg';
import GitIcon from '../../statics/github-logo.svg';
import Linkin from '../../statics/linkin.svg';

class Footer extends Component{

    constructor(props){
        super(props);
        this.state={
        url:{link:['www.google.ca','www.amazon.com','www.facebook.com'],
        socialicon:[EmailIcon,GitIcon,Linkin]},
      
        }   
     }
 render(){


        return (
                <FooterWrapper>
                        <ContactWrapper>
                        <ContactInfo className='ContactHeader'>Contact Me:</ContactInfo>
                            <ContactInfo>Mobile :+1-778-926-8636</ContactInfo>
                            <ContactInfo>Wechat :hainan920120</ContactInfo>
                            <ContactInfo>Email  :frankfang2014@hotmail.com</ContactInfo>    
                        </ContactWrapper>
                    <SocialMediaWrapper>
                    {
                       this.state.url.link.map((item,index)=>{
                            return (
                                <SocialMediaItemLink key={index} href={item}>
                                    <SocialMediaItem src={this.state.url.socialicon[index]}></SocialMediaItem>
                                </SocialMediaItemLink>
                            )
                       })

                   }
                    
                        </SocialMediaWrapper>
                </FooterWrapper>

            

        )
 }


}

export default Footer;