import styled from 'styled-components';
import '../../../../style';


export const ColorSchemeWrapper = styled.div`

display:flex;
flex-wrap:wrap;
justify-content:space-around;
font-family: "Lora",serif,serif;

`
export const ColorSchemeTitle = styled.h1`

text-align:center;
font-size:40px;
color:#404040;
padding-top:60px;
padding-bottom:60px;
@media(max-width:820px){
font-size:25px
}

`
export const ColorSchemeItemWrapper = styled.div`


`

export const ColorSchemeItem=styled.div`

width:150px;
height:150px;


`


export const ColorSchemeItemHeader=styled.h1`
color:#404040;
font-size:20px;
text-align:center;

`