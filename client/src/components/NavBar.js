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


class NavBar extends Component {

    render() {
        return (
          
          <div>
            <Nav>

                <h1>Code Universe</h1>
                <div>
                    <div><Link to="/">Phone Home</Link></div>
                </div>
                <div>
                    <div><Link to="/events">Events</Link></div>
                </div>

            </Nav>

{/*             
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          Project Name
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu> */}

            </div>
        );
    }
}

export default NavBar;