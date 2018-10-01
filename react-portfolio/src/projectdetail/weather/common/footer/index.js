import React, { Component } from 'react';
import {FooterWrapper,ContactWrapper,ContactInfo,SocialMediaWrapper,SocialMediaItem,SocialMediaItemLink,TextSpan,Copyright} from './style';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EmailIcon from '../../../../statics/email.svg';
import GitIcon from '../../../../statics/github-logo.svg';
import Linkin from '../../../../statics/linkin.svg';


class Footer extends Component{

    constructor(props){
        super(props);
        this.state={
        url:{link:['mailto:hello@frankjunfang.com','https://github.com/frank920120','https://www.linkedin.com/in/jun-fang-945397167/'],
        socialicon:[EmailIcon,GitIcon,Linkin]},
      
        }   
     }
 render(){


        return ( 
                <FooterWrapper>
                        <ContactWrapper>
                        <ContactInfo className='ContactHeader'>Contact Me:</ContactInfo>
                            <ContactInfo><i className="fas fa-mobile-alt"></i>  Mobile:<TextSpan> 1-778-926-8636</TextSpan></ContactInfo>
                            <ContactInfo><i className="fab fa-weixin"></i> Wechat:<TextSpan> hainan42</TextSpan></ContactInfo>
                            <ContactInfo><i className="far fa-envelope"></i>  Email:<TextSpan> hello@frankjunfang.com</TextSpan></ContactInfo>  

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
                        <Copyright>@2018 Developed and designed by JUN FANG</Copyright>  
                </FooterWrapper>
               
            

        )
 }


}

export default Footer;