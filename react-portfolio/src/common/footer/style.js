import styled from 'styled-components';
import '../../style';

export const FooterWrapper = styled.footer`
  font-family:'Poppins','Helvetica',sans-serif;
background:#151515;
height:300px;
width:100%;
display:flex;
justify-content:space-between;
position:fixed;
bottom:0 ;
z-index:-1;
`


export const ContactWrapper = styled.div`

display:flex;
flex-direction:column;
justify-content:space-evenly;
padding:20px;

`


export const ContactInfo = styled.h3`

margin:0;
color:#fff;
font-size:25px;
line-height:70px;
&.ContactHeader{
    color:#ed6464;
    font-size:40px;


}

`

export const SocialMediaWrapper = styled.div`

width:200px;
display:flex;
justify-content:space-around;
align-items:center;

`
export const SocialMediaItemLink = styled.a`
display:block;

`
export const SocialMediaItem = styled.img`
width:40px;
height:40px;
display:block;

`