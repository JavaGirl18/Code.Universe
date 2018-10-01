import React, { Component } from 'react';
import styled from 'styled-components'
import { Form, Button } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

const Contain = styled.div`
width: 30%;
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3xiHqTf9ZODMYa-CTFcj7a-pZ049BwusMx8TdYdWRdH_PHjF");
border:solid;
padding:10px;
background-size: cover;
margin-top: 50px;
`
class NewUser extends Component {

    state = {
        newUser: {},
        redirect: false
    }

    handleNewUserChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newUser = {
            ...this.state.newUser
        }
        newUser[attributeName] = attributeValue

        this.setState({ newUser })
    };

    addNewUser = (event) => {
        event.preventDefault()

        this
            .props
            .addNewUserToUsersList(this.state.newUser)

        this.setState({ redirect: true })

    }
    render() {
        console.log("home page")
        if (this.state.redirect) {
            console.log('redirecting')
            return <Redirect push to={'/'} />
        }
        console.log("new user")
        return (
            <div>
               <center> <Contain>
                  <center> <Form onSubmit={this.addNewUser} inverted>
                        <Form.Field widths='equal'>
                            <label fluid label="name">What's your First Name?</label>
                            <input type="text" name="name" placeholder='First Name' onChange={this.handleNewUserChange} />
                        </Form.Field>
                        <Form.Field widths='equal'>
                            <label fluid label="name">What's your Last Name?</label>
                            <input type="text" name="name" placeholder='Last Name' onChange={this.handleNewUserChange} />
                        </Form.Field>
                        <Form.Field widths='equal'>
                            <label fluid label="email">What's your Email?</label>
                            <input type="text" name="email" placeholder='Location' onChange={this.handleNewUserChange} />
                        </Form.Field>
                        <Form.Field widths='equal'>
                            <label fluid label="password">Create a Password</label>
                            <input type="text" name="password" placeholder='password' onChange={this.handleNewUserChange} />
                        </Form.Field>
                        <Form.Field widths='equal'>

                            <label fluid label="title">Number</label>
                            <input type="number" name="number" onChange={this.handleNewUserChange} />
                        </Form.Field>
                        <Button type='submit' value="Create New User" inverted>Submit</Button>
                    </Form></center> 
                </Contain></center>
            </div>
        );
    }
}

export default NewUser;