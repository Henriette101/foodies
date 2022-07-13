import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipes(){
    let params= useParams();
const [details, setDetails] = useState({});
const [activeTab, setActiveTab] = useState("instructions")
    const fetchDetail =async() =>{
        const data= await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`) ;
        const detailData = await data.json ( ) ;
    
        setDetails(detailData);
        
    };
    useEffect(()=>{
        fetchDetail(); 
     },[params.name]);
    return(
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image}/>
            </div>

            <Info>
<Button className={activeTab==='instructions'? 'active':''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
<Button  className={activeTab==='ingredients'? 'active':''}onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
{ activeTab==='instructions' &&(
<div>
    <h3 dangerouslySetInnerHTML={{ __html:details.summary}}></h3>
    <h3 dangerouslySetInnerHTML={{ __html:details.instructions}}></h3>
</div>
)}

{ activeTab==='ingredients' &&(
<ul>{
details.extendedIngredients.map((ingredient)=>
    <li>{ingredient.original}</li>

)}

</ul>
)}

            </Info>
        </DetailWrapper>


    );
}

const DetailWrapper=styled.div`
margin-top:5rem;
margin-bottom:5rem;
display:flex;


.active{

    background:green;
    color:white
}

h2{
    margin-bottom:2rem;
}

li{
    font-size:1rem;
    line-height:1rem;
}

ul{
    margin-top:2rem;
}


`;

const Button=styled.button`
padding:1rem 2rem;
color:#313131;
background: white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
`;

const Info= styled.div`
margin-left:3rem;
`;






export default Recipes;