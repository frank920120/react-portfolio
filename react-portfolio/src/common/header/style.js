import styled from 'styled-components';
import '../../style';


export const HeaderWrapper = styled.div`

background:#1f1f1f;
height:80px;
padding:0;
margin:0;
display:${props=>props.fix?'none':'block'};



`

export const HomeNav = styled.div`

font-family:'Poppins','Helvetica',sans-serif;
background:#1f1f1f;
width:100%;
margin:0 auto;
display:flex;
justify-content:space-around;
padding-bottom:${props=>props.fix?'0px':'100px'}; 
position:${props=>props.fix?'fixed':'relative'};  
top:0;  
z-index:9999;
opacity:${props=>props.fix?'0.9':'1.0'};

`

export const NavIcon = styled.a.attrs({
    href :'/'

})`
    color: #fff;
    font-size: ${props=>props.fix?'50px':'40px'};
    font-weight: 700;
    letter-spacing: 2px;
    padding:0;
    margin:0;
    text-decoration:none;
    transition:.5s ease all;

`
export const MenuWrapper = styled.div`
width:500px;
display:flex;
justify-content:space-around;

a{

   text-decoration:none;
    display:block;
    color:white;
    font-weight:100;
   padding:15px;
&.Highlight{

    background:#ed6464;

}
&.Highlight:hover{

    opacity:0.8;
}

}
`


