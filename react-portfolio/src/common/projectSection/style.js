import styled from 'styled-components';
import '../../style';

export const ProjectWrapper = styled.div`

width:100%;
height:auto;
background:#1f1f1f;
font-family:'Poppins','Helvetica',sans-serif;


`
export const ProjectHeadWrapper = styled.div`
width:900px;
position:relative;
height:160px;


`
export const ProjectHead = styled.h1`
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 160px;
    color: #fff;
    opacity: .1;
    font-weight: 900;
    line-height: 100%;
    z-index: 0;
    width: calc(100% + 300px);
    text-transform: uppercase;
    text-decoration: none;
    margin:0;

`
export const ProjectHeadText = styled.h2`
position:absolute;
    z-index: 1;
    font-weight: 500;
    color: #fff;
    font-size: 24px;
    letter-spacing: 2.67px;
    line-height: 27px;
    text-decoration: none;
    right:0;
    bottom:10px ;
`

export const ProjectContent = styled.div`
width:80%;
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:30px;
margin:0 auto;
margin-top:100px;
padding-bottom:100px;


`

export const ProjectItems = styled.div`

display:block;
width:100%;
margin:0 auto;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow:hidden;
border-radius:10px;
position:relative;
`

export const ProjectImg = styled.img`
    display:block; 
    width:100%;
    cursor: pointer;
    object-fit:contain;
    
`

export const ImgCover = styled.div`
display:block;
    width:100%;
    height:100%;
    position:absolute ;
    top:0;
    left:0;
    background:rgba(0,0,0,1);
    z-index:1;
    opacity:0;
    transition:0.5s linear;

  
&.cover {

   opacity:1;


}
`
export const ProjectTitle = styled.h1`
color:white;
z-index:999;
text-align:center;
font-size:40px;
border-bottom: 6px solid #ED6464;
width:90%;
margin:0 auto;
margin-bottom:50px;
margin-top:20px;




`

export const ProjectIntro = styled.p`
color:white;
font-size:1.3vw;
width:80%;
margin:0 auto;
text-align:center;
letter-spacing:1px;
line-height: 1.6;

`


export const ProjectSkill = styled.p`  
position:absolute;
bottom:10%;
color:#ED6464;
transform:translate(-50%,-50%);
left:50%;
text-align:center;
line-height:25px;

`

export const ProjectButton = styled.a`
color:white;
background:#ED6464;
padding:10px;
text-decoration:none;
position: absolute;
bottom:2%;
transform:translate(-50%,-50%);
transition:1s ease;
left:50%;
cursor:pointer;
border-radius:5px;
outline:none;

&:hover {

opacity:0.7;


}
`

export const Redline = styled.div`

    background:#ed6464;

    width:250px;
    height:7px;
    bottom: 0;
   margin-left:130px;
   
   
`

export const ShowMore = styled.a`

background:#ed6464;
color:#fff;
padding:10px;
text-align:center;
display:block;
width:150px;
margin:0 auto;
cursor:pointer;
margin-bottom:100px;
border-radius:5px;
border:1px solid white;

&:hover{

    opacity:0.8;


}
`