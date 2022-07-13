import React from "react";
import styled from "styled-components";
import Motion from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Cuisine(){
    let params= useParams();
const [cuisine, setCuisine] = useState([]);
       const getCuisine= async(name)=>{
        
        
        const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`) ;
        const recipe = await data.json ( ) ; 
        
        setCuisine(recipe.results);
        console.log(params.type);

       };

       useEffect(() => {
        
        getCuisine(params.type);
       }, [params.type])

       
       return(
        <Grid>
{cuisine.map((item) =>{

    return(
<Card key={item.id}>
<Linkk to={"/Recipes/" + item.id}>
        <img src={item.image}/>
        <h4>{ item.title}</h4>
</Linkk>
    </Card>
    );
}


) 

}





</Grid>

);

    
}

const Grid= styled.div`
display: grid;
 grid-template-columns: auto auto auto auto;
grid-gap: 3rem;
`;

const Card= styled.div`
img{
    width:100%;
    border-radius:2rem;
}

a{
    text-decoration:none;
}
 h4{
    text-align:center;
    padding:1rem;
    color:green;
    
 }

`;

const Linkk= styled(Link)`
text-decoration:none;
color:black;
`;




export default Cuisine;