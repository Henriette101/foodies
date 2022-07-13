import styled from "styled-components";


function Welcome(){



    return(
        <Wel>
 <img className='pic' id='pic3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU" />
<img  className='pic' id='pic2'src="https://daily.jstor.org/wp-content/uploads/2020/05/a_brief_history_of_comfort_food_1_1050x700.jpg" />
<img className='pic' id='pic1' src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" alt="welcome"/>
<p>
Growing Good

food with taste for copy paste

Grow Smart. Eat Smart. Be Smart.

Full On Taste!

Food, better than mud!

Taste the passion!

Peace. Love. Veggies.

Your taste – our passion!

Bring a can, fill the van!

Tastes Home Made, Because It Is!

Dreaming of food

Enjoy in joy!

Living and dying without food

Soup so big, it eats like a meal

We cater to your good taste!

Be at Peace with your food

Just taste it

Food shot from guns

Where Foodies Thrive!

So Close You Can Taste It

Love food so good

Think Outside the Bun

Taste the difference

Organic Food with Local Roots

Quality is our Recipe

Bananas are good all day long

He who eats alone chokes alone

Never eat more than you can lift

Cheese is milk’s leap toward immortality

It doesn’t have to be that way





</p>
        </Wel>

    );
}


const Wel= styled.div`

border: 1px solid white;
margin-bottom:22rem;

.pic {
    position: absolute;
    
   
    height:20rem;
    -webkit-animation: fade 8s infinite;
    animation: fade 24s infinite;
    width: 43%; /*image width*/
    float: left; /*image position*/
  }
  #pic1 {
    animation-delay: 0s;
   
  }
  #pic2 {
   
    animation-delay: 8s;
  }
  #pic3 {
   
    animation-delay: 16s;
  }
  @-webkit-keyframes fade {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    34% {
      opacity: 0;
    }
    88% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    34% {
      opacity: 0;
    }
    88% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

p{
    color:white;
    width: 40%;
    float: right;
   
}


`;















export default Welcome;