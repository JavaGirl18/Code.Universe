import React, { Component } from 'react';
import axios from 'axios'
import { Button, Card, Form } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Events = styled.div`
display: flex;
flex-wrap:wrap;


`
class ShowUser extends Component {
    state = {
        user: {},
        events: [],
        organizerEvents: [],
        attendeeEvents: [],
        editUser: false
    }



    componentDidMount() {

        // this.props.getProject(projectId)

        if (this.props.match.params) {
            // console.log("PROPS", this.props)
            const userId = this.props.match.params.userId
         
            this.getUser(userId)
            console.log(userId)

        }
    }


    getUser = (userId) => {
        axios.get(`/api/users/${userId}`)
            .then(res => {
                console.log("response from api", res.data)
                this.setState({ user: res.data.user, events: res.data.events, organizerEvents: res.data.organizer_events, attendeeEvents: res.data.attendee_events })
                console.log(this.state)

            })
            .catch((err) => {
                console.error(err)
            })

    }

    deleteEvent = () => {
   const orgEventId =this.state.organizerEvents.id
   console.log(this.state.organizerEvents._id)
        //make a delete request to our copy of the api using the params to identify specific idea
        axios.delete(`/api/events/${orgEventId}`).then((res) => {   
            //setstate
            this.setState({
                //data matching user will be removed from the state.user
                organizerEvents: res.data
              
            })
            // this.getUsers()
        })
    }

    handleUpdate = (event) => {
        const copyOfState = { ...this.state.user }
        const attributeName = event.target.name
        const attributeValue = event.target.value
        copyOfState[attributeName] = attributeValue

        this.setState({ user: copyOfState })
    }


    submitUpdate = (event) => {
        event.preventDefault()
        const updatedUser = this.state.user
        const userId = this.props.match.params.id
        console.log(updatedUser)
        axios.put(`/api/users/${userId}`, updatedUser).then(() => {
            window.location.reload()

        })

    }

    toggleButton = () => {
        const canEdit = !this.state.editUser
        this.setState({ editUser: canEdit })
    }

    render() {


 <Form onSubmit={this.submitUpdate}>
                        <Form.Field widths='equal'>
                            <label fluid label="name">What's your First Name?</label>
                            <input type="text" name="name" placeholder='First Name' value={this.state.user.name} onChange={this.handleUpdate} />
                        </Form.Field>
                        <Form.Field widths='equal'>
                            <label fluid label="email">What's your Email?</label>
                            <input type="text" name="email" placeholder='Location' value={this.state.user.email} onChange={this.handleUpdate} />
                        </Form.Field>
                        <Form.Field widths='equal'>

                            <label fluid label="title">Number</label>
                            <input type="number" name="number" value={this.state.user.number} onChange={this.handleUpdate} />
                        </Form.Field>
                        <Button type='submit' value="Update Profile" inverted>Submit</Button>
                    </Form>


        const eventId = this.props.match.eventId
        const eventlist = this.state.events.map((event, index) => {
            const eventId = event.id
            // const eachEvent = `/events/${eventId}/organizers/${organizerId}`
            return (
                <div key={index}>

                    <ul>
                        {/* <Link to={eachOrganizer}> {organizer.name} </Link> */}
                        {event.title}
                    </ul>
                </div>
            )
        })

        

        // const eventId = this.props.match.eventId
        const organizerEvents = this.state.organizerEvents.map((orgEvent, index) => {
            const eventId = orgEvent.id
            const eachEvent = `/events/${eventId}`
            return (
                <div key={index}>

                    <ul>

                        <Card.Group>
                            <Card>
                                <Card.Content>
                                <i class='thumbtack icon'/>
                                    <Link to=''> <Card.Header>{orgEvent.title}</Card.Header></Link>
                                    <Card.Meta>{orgEvent.date}</Card.Meta>
                                    {/* <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description> */}
                                    <Card.Content extra>
                                        <div className='ui two buttons'>
                                            <Link to={eachEvent}><Button basic color='green'>View</Button></Link>
                                            <Button basic color='red' onClick={() => this.deleteEvent(this.state.organizerEvents[index].eventId)}>Cancel Event</Button>
                                        </div>
                                    </Card.Content>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </ul>
                </div>
            )
        })

        const attendeeEvents = this.state.attendeeEvents.map((attenEvent, index) => {
            const eventId = attenEvent.id
            const eachEvent = `/events/${eventId}`
            return (
                <div key={index}>

                    <ul>
                        {/* <Link to={eachOrganizer}> {organizer.name} </Link> */}
                        <Card.Group>
                            <Card>
                                <Card.Content>
                                <i class='thumbtack icon'/>
                                    <Link to=''> <Card.Header>{attenEvent.title}</Card.Header></Link>
                                    <Card.Meta>{attenEvent.date}</Card.Meta>
                                    {/* <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description> */}
                                    <Card.Content extra>
                                        <div className='ui two buttons'>
                                            <Link to={eachEvent}><Button basic color='green'>View</Button></Link>
                                            <Link to=''><Button basic color='red'>Remove </Button></Link>
                                        </div>
                                    </Card.Content>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </ul>
                </div>
            )
        })

        return (
            <div>

                <div>
                   
                    <h4> {this.state.user.name}</h4>
                    <p> {this.state.user.email}</p>
                    <p>{this.state.user.number}</p>
                    <button onClick={this.toggleButton}>Update Profile</button>
                    <h1>Events You've Organized</h1>
                    {organizerEvents}<Button>Create A New Event</Button>
                    <h1>Events You've Attended</h1>
                    <Events>
                        
                        {attendeeEvents}
                    </Events>
                </div>
            </div>
        );
    }
}

export default ShowUser;