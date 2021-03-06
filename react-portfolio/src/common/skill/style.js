import styled from 'styled-components';
import '../../style';



export const SkillWrapper = styled.div`

width:100%;
height:auto;
background:#1f1f1f;
font-family:'Poppins','Helvetica',sans-serif;
padding-top:150px;
/* margin-bottom:300px; */
padding-bottom:100px;
@media (max-width:600px){
 margin-bottom:0;
        
}
@media (max-width:500px){
    padding-top:50px;
  
}
`
export const SkillHeadWrapper = styled.div`
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
export const SkillHead = styled.h1`
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
export const SkillText = styled.h2`
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
    bottom:30px;
  
}
@media (max-width:450px){
display:none;
  
}
`
export const SkillContentWrapper = styled.div`

color:white;
background-color:#1f1f1f;
width:90%;
margin:0 auto;
display:flex;
text-align:center;
@media (max-width:1024px){

flex-direction:column;
justify-content:center;
}

`
export const SkillContent = styled.div`
width:100%;
height:auto;
padding:30px;
display:flex;
flex-direction:column;
justify-content:space-between;
transform:${props=>props.scroll?'translateX(0)':'translateX(100%)'};
opacity:${props=>props.scroll?1:0};
transition:1s ease all;
@media (max-width:1024px){
width:80%;
margin:0 auto;
}

`

export const SkillLogo = styled.img`
width:100px;
height:100px;
display:block;
margin:0 auto;
@media (max-width:600px){
  width:80px;
  height:80px;
        
}
`


export const SkillTitle = styled.h3`

font-size:35px;
color:#ed6464;
@media (max-width:600px){
  font-size:25px;
  
        
}
`

export const SkillSelf = styled.p`
line-height:30px;
font-size:18px;
@media (max-width:600px){
  font-size:15px;
  
        
}
`

export const SkillSubtitle = styled.h3`

font-size:25px;
color:#ed6464;
@media (max-width:600px){
  font-size:15px;
  
        
}
`
export const SkillDescribe = styled.p`
line-height:30px;
font-size:18px;
@media (max-width:600px){
  font-size:10px;
  
        
}

`

export const SkillToolTitle = styled.h2`

font-size:25px;
color:#ed6464;
@media (max-width:600px){
  font-size:15px;
  
        
}
`


export const SkilTool = styled.ul`

font-size:18px;
list-style: none;
padding:0;
@media (max-width:600px){
  font-size:12px;
  
        
}
`

export const SkillToolItem =styled.li`


line-height:30px;


`


