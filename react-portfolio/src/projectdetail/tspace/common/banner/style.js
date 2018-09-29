import styled from 'styled-components';
import '../../../../style';

export const BannerWrapper = styled.div`

width:100%;
height:800px;
position:relative;
font-family: "Lora",serif,serif;
color:#404040;

`
export const BannerImage = styled.img`
width:100%;
height:100%;
object-fit:cover;
display:block;

`

export const DescribeDiv = styled.div`
position:absolute;
width:65%;
height:auto;
transform:translate(-50%,-50%);
top:50%;
left:50%;
background:#fff;
z-index:999;
padding:50px;
border-radius:10px;

@media(max-width:820px){
width:90%;
padding:20px;

}


`
export const DesHeader = styled.h1`

    letter-spacing: 0.3px;
    font-size: 30px;
    font-size: 3rem;
    font-weight: 300;
    padding-bottom: 10px; 
    @media(max-width:820px){
font-size:50px;
text-align:center;
}


    

`
export const DesDiv=styled.div`

display:flex;
justify-content:space-between;

    @media(max-width:820px){

        flex-direction:column;
        align-items:center;
        
    }
`
export const DesContent = styled.p`

    font-family: 'gilroyextrabold', Tahoma, sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;
    order:2;
    width:65%;
    margin:0;
    line-height:25px;
    padding-left:40px;
    border-left: 3px solid #DDE6E8;

@media(max-width:820px){
width:90%;
border:none;
font-size:12px;
padding:10px;;
}
`

export const DesSkillUl = styled.ul`

margin:0;
padding:0;
order:1;


@media(max-width:820px){

display:flex;
justify-content:space-around;
flex-wrap:Wrap;
width:100%;
}


`

export const DesItem = styled.li`

    font-family: 'gilroyextrabold', Tahoma, sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;
    line-height:30px;
    font-weight:bold;
    @media(max-width:820px){
text-align:center;
padding:5px;
}

`

export const ToolDiv=styled.div`

padding:10px;
display:flex;
justify-content:space-between;
align-items:center;

@media(max-width:820px){

flex-direction:column;
align-items:center;

}
`

export const ToolTitle = styled.h1`

font-size:20px;
letter-spacing: 1px;
font-weight: 600;
padding-bottom: 10px; 
margin-bottom:0;

@media(max-width:820px){

text-align:center;
padding:10px;

}
`

export const ToolListUL=styled.ul`

display:flex;
height:auto;
width:300px;
justify-content:space-between;

@media(max-width:820px){

padding:0;

}

`


export const ToolListItem=styled.li`

display:block;

`
export const ToolListImg=styled.img`

width:40px;
height:40px;

@media(max-width:820px){

width:30px;
height:30px;

}

`

export const BannerButton= styled.a`
    background:#fff;
    display:block;
    padding:10px;
    border-radius:5px;
    color:black;
    cursor:pointer;
    transition:.5s ease all;
    border: 1px solid #404040;    
    font-family: 'Poppins','Helvetica',sans-serif;
    font-weight:200;
    color:#404040;

@media(max-width:820px){

    padding:5px;

}

&:hover{
    background:#404040;
    color:white;
}
  }

  

`