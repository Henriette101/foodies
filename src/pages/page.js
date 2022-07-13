import React from 'react';
import Home from './home';
import Cuisine from './cuisine';
import {Routes, Route} from 'react-router-dom';
import Searched from './searched';
import Recipes from './recipes';
 
function Page(){
    return(
       <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/Cuisine/:type"  element={<Cuisine/>}/>
        <Route path="/Searched/:search" element={<Searched/>}/>
        <Route path="/Recipes/:name" element={<Recipes/>}/>
       </Routes>
      

    );
}











export default Page;