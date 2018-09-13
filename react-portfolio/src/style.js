import {injectGlobal} from 'styled-components';


injectGlobal `
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html{

	overflow-x: hidden; 
}
body {
	line-height: 1;
    box-sizing:border-box;
	margin:0;
	position:relative;
	overflow-x: hidden; 
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700');
@font-face{

    font-family:'Poppins','Helvetica';

}

`;