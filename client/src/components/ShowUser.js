import React, { Component } from 'react';
import axios from 'axios'
import { Button, Card, Form, List } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'

const Events = styled.div`
display: flex;
flex-wrap:wrap;
`
const Number = styled.div`
display:flex;
margin-top: 5px;
`
const EventsList = styled.div`
display: inline flex;
padding:10px;
`
const EventList = styled.div`
display: inline flex;
padding:10px;
`
const Profile = styled.div`
float: right;
border:dashed;
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWj2DFp3PdZDEjbbb7QQyxuBJucS4w2Ava_wfhlYURzoe5p6u");
color:white;
padding:10px;
height:150px;
// position:relative;
`
const OrgEvents = styled.div`
margin-top:150px;
// display: flex;
// flex-wrap:wrap;
`
class ShowUser extends Component {
    state = {
        user: {},
        events: [],
        organizerEvents: [],
        attendeeEvents: [],
        editUser: false,
        redirect: false
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

    deleteEvent = (eventId) => {
        console.log(eventId)
        //make a delete request to our copy of the api using the params to identify specific idea
        axios.delete(`/api/events/${eventId}`)
            .then((res) => {
                this.getUser(this.state.user.id)
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
        const userId = this.props.match.params.userId
        console.log(updatedUser)
        axios.put(`/api/users/${userId}`, updatedUser).then(() => {
            window.location.reload()

        })

    }

    toggleButton = () => {
        const canEdit = !this.state.editUser
        this.setState({ editUser: canEdit })
    }
    toggleButton2 = () => {
        const canEdit = !this.state.editUser
        this.setState({ editUser: canEdit })
    }
    deleteUser = (userId) => {
        this.props.deleteUser(userId)
        this.setState({ redirect: true })
    }

    render() {
        
        const userId = this.props.match.params.userId

        const updateForm = (<Form onSubmit={this.submitUpdate}>
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
            <Form.Field>
                <button type='submit' value="Update Profile" inverted>Submit</button></Form.Field>
        </Form>)



        


        // const eventId = this.props.match.eventId
        const eventlist = this.state.events.map((event, index) => {
            const eventId = event.id

            return (
                <div key={index}>

                    <ul>
                        {/* <Link to={eachOrganizer}> {organizer.name} </Link> */}
                        {event.title}
                       
                    </ul>
                </div>
            )
        })



        const listOfOrganizerEvents = this.state.organizerEvents || []
        console.log(listOfOrganizerEvents)
        const organizerEvents = listOfOrganizerEvents.map((orgEvent, index) => {
            const eventId = orgEvent.id
            const eachEvent = `/events/${eventId}`
            console.log(orgEvent)
            return (
<div>
                <EventList key={index}>


                    <Card.Group>
                        <Card>
                            <Card.Content>
                                <i class='thumbtack icon' />
                                <Link to=''> <Card.Header>{orgEvent.title}</Card.Header></Link>
                                <Card.Meta>{orgEvent.date}</Card.Meta>

                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Link to={eachEvent}><Button basic color='green'>View</Button></Link>
                                        <Button basic color='red' onClick={() => this.deleteEvent(this.state.organizerEvents[index].id)}>Cancel Event</Button>
                                    </div>
                                </Card.Content>
                            </Card.Content>
                        </Card>
                    </Card.Group>

                </EventList>


{/* <Form onSubmit={this.submitUpdateEvent}>
    <Form.Field widths='equal'>
        <label fluid label="name">Event Title</label>
        <input type="text" name="title" placeholder='Event Title' value={orgEvent.title} onChange={this.handleUpdateEvent} />
    </Form.Field>
    <Form.Field widths='equal'>
        <label fluid label="location">Location</label>
        <input type="text" name="location" placeholder='Location' value={orgEvent.location} onChange={this.handleUpdateEvent} />
    </Form.Field>
    <Form.Field widths='equal'>

        <label fluid label="Date">Date</label>
        <input type="date" name="date" value={orgEvent.date} onChange={this.handleUpdateEvent} />
    </Form.Field>
    <Form.Field widths='equal'>

        <label fluid label="Date">Time</label>
        <input type="time" name="time" value={orgEvent.time} onChange={this.handleUpdateEvent} />
    </Form.Field>
    <Form.Field widths='equal'>
        <label fluid label="location">Details</label>
        <input type="text" name="details" placeholder='details' value={orgEvent.details} onChange={this.handleUpdateEvent} />
    </Form.Field>
    <Form.Field>
        <button type='submit' value="Update Event" inverted>Submit</button></Form.Field>
</Form>

                 <button onClick={this.toggleButton2}>Update Event</button>{this.state.editUser ? updateForm : null} */}
                 </div>
            )
        })

        const attendeeEvents = this.state.attendeeEvents.map((attenEvent, index) => {
            const eventId = attenEvent.id
            const eachEvent = `/events/${eventId}`
            return (
                <EventsList key={index}>


                    {/* <Link to={eachOrganizer}> {organizer.name} </Link> */}
                    <Card.Group>
                        <Card>
                            <Card.Content>
                                <i class='thumbtack icon' />
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

                </EventsList>
            )
        })

        return (

            <div>

                <Profile>

                    <List>
                        <List.Item>
                            <List.Icon name='users' />
                            <List.Content><strong><h2>{this.state.user.name}</h2></strong></List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='mail' />
                            <List.Content>
                                {this.state.user.email}
                            </List.Content>
                            <List.Item>
                                <Number>
                                    <List.Icon name='phone' />
                                    <List.Content>{this.state.user.number}
                                    </List.Content></Number>
                            </List.Item>

                        </List.Item>
                    </List>
                    <button onClick={this.toggleButton}>Update Profile</button>{this.state.editUser ? updateForm : null}
                    <button onClick={() => this.deleteUser(this.props.match.params.userId)}>Delete Profile</button>
                </Profile>
               <center><h1>Events You've Organized</h1>
                    <OrgEvents>
                    <Link to={`/users/${userId}/events/new`}><Button>Create A New Event</Button></Link>

                   <p>{organizerEvents}</p>
                </OrgEvents></center> 
                <center><h1>Events You've Attended</h1>
                    <Events>

                        <p>{attendeeEvents}</p>
                    </Events></center>


            </div>
        );
    }
}

export default ShowUser;