import styled from 'styled-components';
import '../../style';


export const HeaderWrapper = styled.div`

background:#1f1f1f;
width:100%;
height:80px;
padding:0;
margin:0;



`

export const HomeNav = styled.div`

font-family:'Poppins','Helvetica',sans-serif;
background:#1f1f1f;
width:100%;
margin:0 auto;
display:flex;
justify-content:space-around;

`

export const NavIcon = styled.a.attrs({
    href :'/'

})`
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: .75px;
    padding:0;
    margin:0;
    text-decoration:none;

`
export const MenuWrapper = styled.div`
width:350px;
display:flex;
justify-content:space-around;


`


export const MenuItem = styled.a.attrs({
    href :'/'
})`
    text-decoration:none;
    color:white;
    font-weight:100;
   padding:15px;
&.Highlight{

    background:#ed6464;

}
&.Highlight:hover{

    opacity:0.8;
}

`