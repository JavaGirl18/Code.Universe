import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react'



const Back = styled.div`
background-image:url("https://media.giphy.com/media/97ZkiqMSW8kW4/giphy.gif")
`

class NavBar extends Component {

    render() {
        return (
          
          <Back>
    

<Segment clearing>
    <Header as='h2' floated='right' color='red'>
    <Link to="/events">Events</Link>
    </Header>
    <Header as='h2' floated='left'>
    <Link to="/">Code.Universe</Link>
    </Header>
  </Segment>
 

            </Back>
        );
    }
}

export default NavBar;