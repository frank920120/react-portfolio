import styled from 'styled-components';
import '../../../../style';

export const FooterWrapper = styled.footer`
  font-family:'Poppins','Helvetica',sans-serif;
background:#151515;
height:300px;
width:100%;
display:flex;
justify-content:space-around;
@media (max-width:600px){
  flex-direction:column;
  align-items:center;
  text-align:center;
  position:relative;
}
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
font-size:20px;
line-height:70px;
&.ContactHeader{
    color:#ed6464;
    font-size:30px;
}

`

export const SocialMediaWrapper = styled.div`

width:200px;
display:flex;
justify-content:space-around;
align-items:center;
@media (max-width:600px){
  padding:10px;
        
}

`
export const SocialMediaItemLink = styled.a`
display:block;

`
export const SocialMediaItem = styled.img`
width:30px;
height:30px;
display:block;

&:hover{

color:white;


}

`

export const TextSpan =styled.span`

font-size:15px;
font-weight:400;

`