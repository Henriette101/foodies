import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
 
function Popular(){
    const [popular, setPopular] = useState([])
    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async ( ) => {
    
    const check= localStorage.getItem("popular");
    if(check){
        setPopular(JSON.parse(check));
    }
    else{
        
    const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`) ;
        const data = await api.json ( ) ;
        localStorage.setItem("popular", JSON.stringify(data.recipes));  
        setPopular(data.recipes);
    }
   
    };

    return (
        <div>
        
        <Wrapper>
        <h3>Popular Picks</h3>
        <Splide options={{
            perPage:4,
            arrows:true,
            pagination:false,
            drag:'free',
            gap:'4rem',

        }}>
        {popular.map((recipe) =>{
        return (
        <SplideSlide key={recipe.id}>
        <Card className="col-12 col-md-5 m-1">
    <Link to={"/Recipes/" + recipe.id}>
        <p>{recipe.title}</p>
        <img src={recipe.image} alt={recipe.title} />
        <Gradient/>
        </Link>
        </Card>
        </SplideSlide>
        );
        })}
        </Splide>
        </Wrapper>
        
        </div>
    );
}

const Wrapper= styled.div`


h3{
    font-weight:600;
    font-size:35px;
    font-family: Brush Script MT, Brush Script Std, cursive;
    
}

h3:hover {
    color: orange;
  }
`;

const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
img{
border-radius: 2rem;
position: absolute;
left: 0;
width: 100%;
height: 70%;
object-fit: cover;
}
p {
position: absolute;
z-index: 100;
left: 50%;
bottom: 20%;
transform: translate(-50%, 0%);
color: white;
width: 100%;
text-align: center;
font-weight: 600;
font-size: 1rem;
height: 40%;
display: flex;
justify-content: center;
align-items: center;

}

 `;

const Gradient= styled.div`
z-index: 3;
position: absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0)  rgba(0,0,0,0.5));


`











export default Popular;