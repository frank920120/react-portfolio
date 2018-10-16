import styled from 'styled-components';
import '../../../../style';



export const HomeNav = styled.div`

font-family:'Poppins','Helvetica',sans-serif;
background:#1f1f1f;
width:100%;
margin:0 auto;
display:flex;
justify-content:space-between;
align-items:center;
position:fixed;
top:0;  
z-index:9999;



`

export const NavIcon = styled.a.attrs({
    href :'/'

})`
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 2px;
    width:500px;
    padding:0;
    margin:0;
    text-decoration:none;
    padding-left:10px;
    display:block;
    @media (max-width:820px){
font-size:30px;

}

   @media(max-width:370px){
font-size:20px;
text-align:center;
}


`


export const MenuWrapper = styled.div`
width:500px;
display:flex;
justify-content:flex-end;



a{

   text-decoration:none;
    display:block;
    color:white;
    font-weight:100;
   padding:20px;
   outline:none;
   @media (max-width:820px){
font-size:15px;

}
&.Highlight{

    background:#ed6464;
    font-weight:400;
    font-size:20px;
    transition:1s all ease;
    @media (max-width:820px){
font-size:15px;


}
@media(max-width:370px){
font-size:10px;
text-align:center;
}

}
&.Highlight:hover{

    opacity:0.8;
}

}
`

