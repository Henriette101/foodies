import React from 'react';
import Popular from '../components/popular';
import Veggie from '../components/veggie';
import Welcome from './welcome';

function Home(){
    return(
        <div>
              <Welcome/>
<Popular/>
      <Veggie/>
        </div>

    );
}







export default Home;