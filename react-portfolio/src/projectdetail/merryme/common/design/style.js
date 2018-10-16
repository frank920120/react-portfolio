import styled from 'styled-components';
import '../../../../style';


export const DesignSectionWrapper = styled.div`

font-family: "Lora",serif,serif;
background:#e4e4e4;

`

export const DesignTitle=styled.h1`
text-align:center;
font-size:40px;
color:#404040;
margin:0;
margin-top:60px;
padding-top:60px;
padding-bottom:60px;
@media(max-width:820px){
font-size:25px
}

`
export const DesignImgWrapper = styled.div`
display:flex;
justify-content:space-around;
flex-wrap:wrap;
align-items:flex-start;


`
export const DesginImg=styled.img`

object-fit:contain;
padding:30px;
max-width:100%;
@media(max-width:500px){
padding:0;
margin-top:20px;
}
`