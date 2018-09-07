import styled from 'styled-components';
import '../../style';


export const BannerWrapper = styled.div`
    background:#1f1f1f;
    width:100%;
    height:800px;
    font-family:'Poppins','Helvetica',sans-serif;
    position:relative;
    padding-top:${props=>props.fix?'150px':'0px'};
`

export const BannerSection =styled.section`
width:80%;
margin:0 auto;
text-align:left;
transform:${props=>props.load?'translateX(0px)':'translateX(-250px)'};
opacity:${props=>props.load?'1':'0'};
transition:1.5s ease-in-out;
`

export const BannerHead = styled.h1`
    color: #fff;
    font-size: 60px;
    line-height: 87px;
    letter-spacing: 5.83px;
    font-weight: 700;
    margin-bottom: 75px;
    padding: 0;
    margin:0;
    padding-bottom:50px;
    position:relative;
    padding-left:50px;
`

export const BannerText = styled.h2`

    color: #fff;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 1.78px;
    font-weight: 400;
    padding: 0;


`
export const SocialMediaCover = styled.div`

position:absolute;
width:20px;
height:100px;
display:flex;
flex-direction:column;
justify-content:space-between;
left:10px;
top:20px;

`

export const SocialMedia = styled.a`
display:block;
&:hover{
    opacity:0.8;
}


`

export const SocialMediaIcon = styled.img`
display:block;
width:20px;
height:20px;


`