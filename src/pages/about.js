import React from 'react';
import {BsFacebook} from "react-icons/bs";
import { FaInstagram } from 'react-icons/fa';
import {AiFillYoutube} from 'react-icons/ai';
import {AiOutlineTwitter }from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import {BiHappyBeaming} from 'react-icons/bi';
import styled from 'styled-components';

function Follow(){


    return(
<Wrapp>
    <h1>Follow Us</h1>
  <Wrap><BsFacebook/></Wrap>  
  <Wrap><FaInstagram/></Wrap> 
  <Wrap><AiFillYoutube/></Wrap> 
  <a href="https://twitter.com/Ihenriettee"> 
  <Wrap><AiOutlineTwitter/></Wrap>
  </a> 
  <Wrap><AiFillLinkedin/></Wrap> 
  
  <h2>Foodies welcome here</h2>
  <Wrap><BiHappyBeaming/></Wrap>
    
</Wrapp>
    );
}

const Wrapp=styled.div`

display:flex;
justify-content: center;
h1{
    color:green;
    font-weight:600;
    font-size:35px;
    font-family: Brush Script MT, Brush Script Std, cursive;
    animation: wiggle 2s linear infinite;
    marign-top:2rem;
    margin-bottom:2rem;
}
keyframes wiggle {
    0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
  }
  
  }
  h2{
    color:green;
  }

  svg{
    
  }
`;

const Wrap=styled.div`

margin-right:2rem;
text-decoration:none;


color: green;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
cursor:pointer;
margin-bottom:4rem;
font-size:2rem;
margin-left:2rem;

`;



export default Follow;