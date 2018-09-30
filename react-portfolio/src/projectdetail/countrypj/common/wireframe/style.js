import styled from 'styled-components';
import '../../../../style';


export const WireFrameWrapper = styled.div`
font-family: "Lora",serif,serif;
background:#e4e4e4;
`

export const WireFrameHeader = styled.h1`
text-align:center;
font-size:40px;
color:#404040;
margin:0;
padding-top:60px;
padding-bottom:60px;
@media(max-width:820px){
font-size:25px
}
`

export const WireFrameItemWrapper = styled.div`
display:flex;
justify-content:space-around;
flex-wrap:wrap;
@media(max-width:820px){
flex-direction:column;
align-items:center;
}
`

export const WireFrameItem = styled.img`
width:300px;
height:400px;
padding:30px;
max-width:100%;
object-fit:contain;
@media(max-width:820px){
padding:10px;
}
`