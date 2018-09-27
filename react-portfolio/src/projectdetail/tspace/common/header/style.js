import styled from 'styled-components';
import '../../../../style';


// // export const HeaderWrapper = styled.div`

// // background:#1f1f1f;
// // height:80px;
// // padding:0;
// // margin:0;
// // display:fixed;

// // @media (max-width:820px){

// // display:none;


// // }

// `

export const HomeNav = styled.div`

font-family:'Poppins','Helvetica',sans-serif;
background:#1f1f1f;
width:100%;
margin:0 auto;
display:flex;
justify-content:space-around;
align-items:center;
/* padding-bottom:${props=>props.fix?'0px':'100px'};  */
/* padding:10px; */
position:fixed;
top:0;  
z-index:9999;
/* opacity:${props=>props.fix?'0.9':'1.0'}; */
/* @media (max-width:820px){

position:relative;
flex-direction:column;
opacity:1;
padding-bottom:0;
} */


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
    display:block;

/* @media (max-width:820px){
 transition-property: none;
background:#151515;
text-align:center;
padding:20px;
font-size:60px;
}

@media (max-width:500px){
font-size:50px;
        
}
@media (max-width:450px){
  font-size:40px;
  
} */
`


export const MenuWrapper = styled.div`
width:500px;
display:flex;
/* justify-content:space-around; */
justify-content:flex-end;

/* @media (max-width:820px){

flex-direction:column;
width:100%;
text-align:center;
background:#151515;
height:${props=>props.hamburgerControl?'auto':0};
overflow: hidden;
} */

a{

   text-decoration:none;
    display:block;
    color:white;
    font-weight:100;
   padding:20px;
   outline:none;
&.Highlight{

    background:#ed6464;
    font-weight:400;
    font-size:20px;
    transition:1s all ease;

}
&.Highlight:hover{

    opacity:0.8;
}

/* @media (max-width:820px){
padding:20px;
margin-top:20px;
font-size:15px;

} */
}
`

// export const Hamburger = styled.img`

// display:block;
// width:40px;
// height:40px;
// cursor:pointer;
// outline:none;
// padding:20px;
// display:none;
// position:absolute;
// right:20px;
// top:10px;
// z-index:999;

// @media (max-width:820px){

//     display:block;


// }
// @media (max-width:500px){
//   width:35px;
//   height:35px;
  
// }
// @media (max-width:450px){
//     right:10px;
//    padding:0;
//     top:25px;
//     width:30px;
//     height:30px;
  
// }
// `


