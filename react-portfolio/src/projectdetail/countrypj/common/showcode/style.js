import styled from 'styled-components';
import '../../../../style';

export const CodeWrapper = styled.div`

padding-bottom:30px;
background-image:url(${props=>props.bg});
background-repeat:none;
background-size:cover;
background-attachment:fixed;

`

export const Codetitle=styled.h1`
text-align:center;
font-size:40px;
color:#404040;
margin:0;
padding:30px;
color:white;
@media(max-width:820px){
font-size:25px
}
`


export const CodeItemWrapper = styled.div`
display:flex;
/* flex-direction:column; */
justify-content:center;
@media(max-width:820px){
flex-direction:column;
align-items:center;

}

`

export const CodeItemTitle=styled.h3`
font-size:30px;
color:#404040;
padding:20px;
margin:0;
color:white;
text-align:center;
@media(max-width:820px){
font-size:20px;

}

`

export const CodeItem=styled.img`
padding:20px;
display:block;
object-fit:contain;
max-width:70%;


`