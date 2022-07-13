import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category(){

    return(

        <List>
<SLink to={'/Cuisine/Italian'} className="example">
    <FaPizzaSlice />
    <h4> Italian</h4>
</SLink>


<SLink  to={'/Cuisine/American'}>
    <FaHamburger />
    <h4> American</h4>
</SLink>

<SLink to={'/Cuisine/Thai'}>
    < GiNoodles/>
    <h4>Thai</h4>
</SLink>

<SLink to={'/Cuisine/Jewish'}>
    < GiChopsticks/>
    <h4>Japanese</h4>
</SLink>
</List>

    );
}

const List= styled.div`

display:flex;
justify-content: center;
margin:2rem 0rem;



`;

const SLink= styled(NavLink)`

margin-right:2rem;
text-decoration:none;
border-radius:50%;
height:6rem;
width:6rem;
background-color: green;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
cursor:pointer;
transform: scale(0.6);



svg{
    color:white;
    font-size:1.5rem
}

h4{
    color:white;
    font-size:0.8rem;
    
}



.example:hover{
    
    background: pink;
   

}


&.active{
    background:linear-gradient(to right, #e94057, #f27121);
    svg{
        color:white;
    }

    h4{

        color:white;
    }
}



`;










export default Category;