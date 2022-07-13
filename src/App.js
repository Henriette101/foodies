import Page from "./pages/page";
import Category from "./components/Category";
import Search from "./components/search";
import { BrowserRouter } from "react-router-dom";
import {IoFastFoodSharp} from 'react-icons/io5';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Follow from "./pages/about";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav>
      <IoFastFoodSharp to={"/"}/>
      <Logo to={"/"}>LoveOnPlate</Logo>
      </Nav>
      <Search/>
      <Category/>
    
      <Page/>
      <Follow/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

const Logo= styled(Link)`

text-decoration:none;
font-size:2rem;
font-weight:400;
font-family: Brush Script MT, Brush Script Std, cursive;

color: green;

`;

const Nav= styled.div`
padding:2.5rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;

svg{

  font-size:5rem;
  color: green;
  animation: wiggle 2s linear infinite;
  
}

@keyframes wiggle {
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

`;

