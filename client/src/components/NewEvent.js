import React, { Component } from 'react';
import styled from 'styled-components'
import { Form, Button } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'


const Contain = styled.div`
width: 30%;
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB1cRdsN48EwGJmgcpxPHPOUu3jhtFCF938QAUGh__MWv7968");
border:solid;
padding:10px;

`
class NewEvent extends Component {
    state = {
        newEvent: {},
        organizer:[],
        redirect: false
    }


    handleNewEventChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newEvent = {
            ...this.state.newEvent
        }
        newEvent[attributeName] = attributeValue

        this.setState({ newEvent })
    };

    addNewEvent = (event) => {
        event.preventDefault()

        this
            .props
            .addNewEventToEventsList(this.state.newEvent)

        this.setState({ redirect: true })
    }
    render() {
        console.log("new events")
        if (this.state.redirect) {
            console.log('redirecting')
            return <Redirect push to={'/events'} />
        }

        return (
            <Contain>
                <Form inverted onSubmit={this.addNewEvent}>
                    <Form.Field widths='equal'>
                        <label fluid label="title">Event Title</label>
                        <input type="text" name="title" placeholder='First Name' onChange={this.handleNewEventChange} />
                    </Form.Field>
                    <Form.Field widths='equal'>
                        <label fluid label="title">Location</label>
                        <input type="text" name="location" placeholder='Location' onChange={this.handleNewProjectChange} />
                    </Form.Field>
                    <Form.Field widths='equal'>

                        <label fluid label="title">Date</label>
                        <input data-format="yyyy-MM-dd" type="date" name="title" control="select" onChange={this.handleNewProjectChange}/>
                    </Form.Field>
                    <Form.Field widths='equal'>
                        <label fluid label="title">Time</label>
                        <input data-format="yyyy-MM" type="time" name="title" control="select" onChange={this.handleNewProjectChange} />
                    </Form.Field>
                    <Form.TextArea label="Details" placeholder="Tell us more about the event..." onChange={this.handleNewProjectChange}>
                    </Form.TextArea>
                    <Button type='submit' value="Create New User" inverted>Submit</Button>
                </Form>
            </Contain>

        );
    }
}

export default NewEvent;