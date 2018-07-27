import React, { Component } from 'react';
import styled from 'styled-components'

const Back = styled.div`
background-image: url("https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/aclusteranda.jpg");
background-size: cover;
height: 100vh;

color: white;
`
const Img = styled.div`
img{
width: 100vw;
height: 60vh;
position: relative;
}
`
const Text = styled.div`
position: absolute;
color: white;
margin-top:-50px;
`
const Sign = styled.div`
margin-top: 20px;
width: 50%;
position: center;
`

class HomePage extends Component {
    render() {
        return (
            <div>
                   
<Img>
    <img src= 'https://pre00.deviantart.net/c5fc/th/pre/f/2014/053/e/2/free_space_galaxy_texture_by_lyshastra-d77gh54.jpg'/>
 
</Img>
<Text>Home</Text>


<center><Sign>
<div class='ui padded segment'>
  <button class='ui fluid primary button' role='button'>
    Login
  </button>
  <div class='ui horizontal divider'>Or</div>
  <button class='ui fluid secondary button' role='button'>
    Sign Up Now
  </button>
  </div>
                </Sign></center>
                </div>
         
        );
    }
}

export default HomePage;