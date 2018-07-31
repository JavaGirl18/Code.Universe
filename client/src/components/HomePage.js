import React, { Component } from 'react';
import styled from 'styled-components'
import { Form, Button, Checkbox } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

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
margin-top:-300px;
margin-left: 500px;
font-size:60px;
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

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.findUserByEmail()
    }

    render() {
        if (this.props.loggedInstate) {
            // return <Redirect to={`/users/${this.props.userId}`} />
        }

        return (

            <div>

                <Img>
                    <img src='https://pre00.deviantart.net/c5fc/th/pre/f/2014/053/e/2/free_space_galaxy_texture_by_lyshastra-d77gh54.jpg' />

                </Img>
               <Text><h1>May the Code Be With You</h1></Text>


                <center><Sign>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Email</label>
                            <input type="text" name="email" onChange={this.props.handleFindUser} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.props.handleFindUser} />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Sign></center>
            </div>

        );
    }
}

export default HomePage;