import styled from 'styled-components';

export const Title = styled.h3`
  -moz-box-shadow: 0px 0px 4px -5px #00a61c;
	-webkit-box-shadow: 0px 0px 4px -5px #00a61c;
	box-shadow: 0px 0px 4px -5px #00a61c;
	background-color:#026e00;
	-webkit-border-top-left-radius:0px;
	-moz-border-radius-topleft:0px;
	border-top-left-radius:0px;
	-webkit-border-top-right-radius:14px;
	-moz-border-radius-topright:14px;
	border-top-right-radius:14px;
	-webkit-border-bottom-right-radius:0px;
	-moz-border-radius-bottomright:0px;
	border-bottom-right-radius:0px;
	-webkit-border-bottom-left-radius:14px;
	-moz-border-radius-bottomleft:14px;
	border-bottom-left-radius:14px;
text-indent:0;
	border:2px solid #045c01;
	display:inline-block;
	color:#ebebeb;
	font-family:arial;
	font-size:15px;
	font-weight:bold;
	font-style:normal;
height:50px;
	line-height:50px;
width:140px;
	text-decoration:none;
	text-align:center;
}.classname:hover {
	background-color:#000000;
}.classname:active {
	position:relative;
	top:1px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
