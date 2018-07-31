import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import {
//     Container,
//     Divider,
//     Dropdown,
//     Grid,
//     Header,
//     Image,
//     List,
//     Menu,
//     Segment,
//   } from 'semantic-ui-react'



const Nav = styled.div`
border-bottom:solid; 
background-color: white;
color:black;   
`
const Links = styled.div`
float: right;
color: black;
display:flex;
h3{
margin-left:20px;
}
`

class NavBar extends Component {

    render() {
        return (
          
          <div>
            <Nav>

                <h1>Code Universe</h1>
                <Links>
                   <Link to="/"><h3>Phone Home</h3></Link>
                
                    <Link to="/events"><h3>Events</h3></Link>
                </Links>

            </Nav>


 

            </div>
        );
    }
}

export default NavBar;