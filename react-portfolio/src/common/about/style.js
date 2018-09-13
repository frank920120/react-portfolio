import styled from 'styled-components';
import '../../style';

export const AboutWrapper = styled.div`

width:100%;
height:auto;
background:#1f1f1f;
font-family:'Poppins','Helvetica',sans-serif;
padding-top:150px;
@media (max-width:500px){
padding-top:50px;
        
}
`
export const AboutHeadWrapper = styled.div`
width:900px;
position:relative;
height:160px;
@media (max-width:1024px){

width:800px;
}
@media (max-width:820px){
    width:600px;
        
}
@media (max-width:600px){
    width:500px;
        
}
@media (max-width:500px){
    width:430px;
    height:100px;
}
`
export const AboutHead = styled.h1`
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
    @media (max-width:1024px){

font-size:140px;
}
@media (max-width:820px){
        font-size:100px;
        
}
@media (max-width:600px){
    font-size:80px;
        
}
@media (max-width:500px){
    font-size:60px;
  
}
`
export const AboutText = styled.h2`
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
    @media (max-width:1024px){


            font-size:18px;
}
@media (max-width:820px){
        font-size:15px;
        bottom: 60px;
        
}
@media (max-width:600px){
    font-size:10px;
    bottom: 80px;
        
}
@media (max-width:500px){
    bottom:30px ;
  
}
@media (max-width:450px){
display:none;
  
}
`

export const AboutContent = styled.div`

background:#1f1f1f;
width:100%;
height:auto;
display:flex;
width:90%;
margin:0 auto;
flex:1;
padding-bottom:100px;
@media (max-width:1024px){

flex-direction:column;
width:100%;
}

`

export const AboutLeft = styled.div`
width:50%;
@media (max-width:1024px){
margin:0 auto;
width:80%;
}
@media (max-width:500px){
    width:90%;
  
}

`

export const AboutRight = styled.img`

width:50%;
object-fit:contain;
height:auto;
display:block;
padding:10px;
transform:${props=>props.fadein?'translateX(0)':'translatex(100%)'};
opacity:${props=>props.fadein?1:0};
transition:1s all linear ; 
@media (max-width:1024px){

margin:0 auto;
width:70%;
}

`

export const AboutIntro = styled.p`

    color: #fff;
    font-size: 14px;
    letter-spacing: 1.65px;
    line-height: 26px;
    font-weight: 300;
    margin-bottom: 25px;
    padding:20px;

@media (max-width:450px){
font-size:10px;
  
}

`

export const Highlight = styled.span`

    color:#ED6464;


` 
export const Redline = styled.div`

    background:#ed6464;

    width:250px;
    height:7px;
    bottom: 0;
   margin-left:10%;
   
   
`