import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search(){
 const [input, setInput] = useState("")
 const navigate= useNavigate();
 const submitHandler=(e)=>{
    e.preventDefault();
    navigate("/Searched/" + input);
 };


return(
    
 
    <FormStyle  onSubmit={submitHandler}>
        
        <div>
            <FaSearch></FaSearch>
        <input type="text"  onChange={(e)=>setInput(e.target.value)} value={input} />
        </div>
    </FormStyle>

);
}

 const FormStyle= styled.form`

margin:-5rem 10rem 0rem 15rem;


div{
    width:20%;
    position:absolute;
    
    margin-left:45%;
}

input{
    width:85%;
    border:none;
    background-color: green;
    color:white;
    padding:0.3rem 3rem;
    border-radius:1rem;
    font-size:1.5rem;
    
    outline:none;
}

svg{
color:white;
position:absolute;
top:50%;
transform:translate(100%, -50%);
left:0%
}




`;













export default Search;