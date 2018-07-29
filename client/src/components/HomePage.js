import React, { Component } from 'react';
import styled from 'styled-components'
import { Form, Container } from 'semantic-ui-react'

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
const Contain = styled.div`
width: 30%;
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB1cRdsN48EwGJmgcpxPHPOUu3jhtFCF938QAUGh__MWv7968");
border:solid;
padding:10px;

`

class HomePage extends Component {
    render() {
        return (
<Contain>
            <Form>
               <Form.Field widths='equal'>
      <label fluid label="title">Event Title</label>
      <input type="text" name="title" placeholder='First Name' />
    </Form.Field>
    <Form.Field widths='equal'>
      <label fluid label="title">Location</label>
      <input type="text" name="location" placeholder='Location' />
    </Form.Field>
    <Form.Field widths='equal'>
   
<label fluid label="title">Date</label>
 <input data-format="yyyy-MM-dd" type="text" name="title" control="select" /> 
    </Form.Field>
    <Form.Field widths='equal'>
   
   <label fluid label="title">Time</label>
    <input data-format="yyyy-MM-dd" type="text" name="title" control="select" /> 
       </Form.Field>
       <Form.TextArea label="Details" placeholder="Tell us more about the event...">
   
   {/* <label fluid label="title">Details</label> */}
    {/* <input data-format="yyyy-MM-dd" type="text" name="title" control="select" />  */}
       </Form.TextArea>
                </Form>
</Contain>
//             <div>
                   
// <Img>
//     <img src= 'https://pre00.deviantart.net/c5fc/th/pre/f/2014/053/e/2/free_space_galaxy_texture_by_lyshastra-d77gh54.jpg'/>
 
// </Img>
// <Text>Home</Text>


// <center><Sign>
// <div class='ui padded segment'>
//   <button class='ui fluid primary button' role='button'>
//     Login
//   </button>
//   <div class='ui horizontal divider'>Or</div>
//   <button class='ui fluid secondary button' role='button'>
//     Sign Up Now
//   </button>
//   </div>
//                 </Sign></center>
//                 </div>
         
        );
    }
}

export default HomePage;