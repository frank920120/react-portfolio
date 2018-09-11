import React, { Component } from 'react';
import {BannerWrapper,BannerSection,BannerHead,BannerText,SocialMedia,SocialMediaCover,SocialMediaIcon,Redline} from './style';
import EmailIcon from '../../statics/email.svg';
import GitIcon from '../../statics/github-logo.svg';
import Linkin from '../../statics/linkin.svg';
class HomeBanner  extends Component{

constructor(props){
super(props);
this.state={
url:{link:['www.google.ca','www.amazon.com','www.facebook.com'],
socialicon:[EmailIcon,GitIcon,Linkin]},
scroll :false,
load:false
}

}

componentDidMount() {
    window.addEventListener('scroll', ()=>{

            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        this.setState({

             scroll : (scrollTop>80)

        })
    });

    window.addEventListener('load', ()=>{

        this.setState({

            load:true

        })

    });

  }
    render(){


        return(

            <BannerWrapper fix={this.state.scroll}>
                <BannerSection load={this.state.load}>
                    <BannerHead>
                         I am a Front-End web developer & an interaction designer
                         <SocialMediaCover>
                   {
                       this.state.url.link.map((item,index)=>{
                            return (
                                <SocialMedia key={index} href={item}>
                                    <SocialMediaIcon src={this.state.url.socialicon[index]}></SocialMediaIcon>
                                </SocialMedia>
                            )
                       })

                   }
                </SocialMediaCover>

                    </BannerHead>
                    <BannerText>HTML5 | CSS3 | JavaScript | ReactJS,Redux,styled-components | WordPress | PHP | MySQL | Git | Balsamiq | InVision | Photoshop
                    <Redline></Redline>
                    </BannerText>
                </BannerSection>
            
            </BannerWrapper>


        )



    }


}

export default HomeBanner;