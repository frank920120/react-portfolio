import styled from 'styled-components';
import '../../style';


export const BannerWrapper = styled.div`
    background:#1f1f1f;
    width:100%;
    height:600px;
    font-family:'Poppins','Helvetica',sans-serif;
    position:relative;
    padding-top:${props=>props.fix?'150px':'0px'};
`

export const BannerSection =styled.section`
width:80%;
margin:0 auto;
text-align:left;
position:relative;
`

export const BannerHead = styled.h1`
    color: #fff;
    font-size: 5vw;
    line-height: 87px;
    letter-spacing: 5.83px;
    font-weight: 700;
    margin-bottom: 75px;
    padding: 0;
    margin:0;
    padding-bottom:50px;
    padding-left:50px;
  
`

export const BannerText = styled.h2`

    color: #fff;
    font-size: 1.4vw;
    line-height: 27px;
    letter-spacing: 1.78px;
    font-weight: 400;
    padding: 0;
    position:relative;
    padding-bottom:50px;

`
export const Redline = styled.div`

    background:#ed6464;
    position:absolute;
    width:250px;
    height:7px;
    bottom: 0;
    left:0;
   
`


export const SocialMediaCover = styled.div`

position:absolute;
width:20px;
height:100px;
display:flex;
flex-direction:column;
justify-content:space-between;
left:0;
top:140px;

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

