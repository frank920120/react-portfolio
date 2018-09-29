import styled from 'styled-components';
import '../../../../style';



export const ResponsiveWrapper = styled.div`

width:100%;
background-color:#e4e4e4;


`

export const ResponsiveHeader = styled.h1`
font-family:'Poppins','Helvetica',sans-serif;
font-size:40px;
color:#404040;
padding-top:60px;
padding-bottom:60px;
text-align:center;
margin:0;
width:100%;

   @media(max-width:820px){
font-size:25px
}

`


export const ImageWrapper = styled.div`
width:100%;
display:grid;
grid-template-columns:1fr 1fr;
justify-content:center;


`
export const ImageItem = styled.img`
display:block;
object-fit:contain;
margin:0 auto;
max-width:100%;
    &.iphoneview{
        
        grid-column:1/2;


    }
   &.ipadview{

       grid-column:2/3;

   }
   &.labtopview{

       grid-column:1/3;


   }

`