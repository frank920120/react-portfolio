import styled from 'styled-components';
import '../../style';

export const AboutWrapper = styled.div`

width:100%;
height:auto;
background:#1f1f1f;
font-family:'Poppins','Helvetica',sans-serif;
padding-top:150px;

`
export const AboutHeadWrapper = styled.div`
width:900px;
position:relative;
height:160px;


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
`

export const AboutContent = styled.div`

background:#1f1f1f;
width:100%;
height:auto;
display:flex;
width:90%;
margin:0 auto;
flex:1;
`

export const AboutLeft = styled.div`
width:50%;

`

export const AboutRight = styled.img`

width:50%;
object-fit:contain;
height:auto;
display:block;

transform:${props=>props.fadein?'translateX(0)':'translatex(100%)'};
opacity:${props=>props.fadein?1:0};
transition:1s all linear ; 


`

export const AboutIntro = styled.p`

    color: #fff;
    font-size: 14px;
    letter-spacing: 1.65px;
    line-height: 26px;
    font-weight: 300;
    margin-bottom: 25px;
    padding:20px;



`