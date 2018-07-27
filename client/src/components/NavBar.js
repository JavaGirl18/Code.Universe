import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Nav = styled.div`
border-bottom:solid; 
background-color: white;
color:black;   
`


class NavBar extends Component {

    render() {
        return (
          
          <div>
            <Nav>

                <h1>Code Universe</h1>
                <div>
                    <div><Link to="/">Sign Up</Link></div>
                </div>

            </Nav>
            </div>
        );
    }
}

export default NavBar;