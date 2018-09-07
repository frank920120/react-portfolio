import styled from 'styled-components';
import '../../style';

export const ProjectWrapper = styled.div`

width:100%;
height:1000px;
background:#1f1f1f;
font-family:'Poppins','Helvetica',sans-serif;


`
export const ProjectHeadWrapper = styled.div`
width:65%;
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
width:70%;
display:grid;
grid-template-columns:1fr 1fr 1fr;
grid-gap:30px;
margin:0 auto;
margin-top:100px;


`

export const ProjectItems = styled.div`

display:block;
height:300px;
width:300px;
margin:0 auto;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow:hidden;
position:relative;
`

export const ProjectImg = styled.img`
    display:block;
    cursor: pointer;
    object-fit:cover;
    transition:1s ease-in-out all;

    &:hover{

        transform:scale(1.2,1.2);

    }
    
`

export const ImgCover = styled.div`
    width:300px;
    height:300px;
    position:absolute ;
    top:0;
    left:0;
    background:rgba(0,0,0,0.7);
    z-index:1;
    transform: scale(0);
    transition:0.5s ease-in-out all;
&.cover {

    transform: scale(1);


}
`

