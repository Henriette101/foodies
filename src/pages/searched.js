import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect} from "react";



function Searched(){
const [searchedRecipes, setSearchedRecipes] = useState([]);
let params= useParams();
    const getSearched= async(name)=>{
        const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`) ;
        const recipes = await data.json ( ) ; 
        setSearchedRecipes(recipes.results);

    }

    useEffect(() => {
     
     getSearched(params.search);
    }, [params.search])

    return( <Grid>
{
searchedRecipes.map((item)=>{
return(
    <Card key={item.id}>
        <Linkk to={"/Recipes/" + item.id}>
<img src={item.image}/>
<h4>{item.title}</h4>
</Linkk>

    </Card>
);
})


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







export default Searched;