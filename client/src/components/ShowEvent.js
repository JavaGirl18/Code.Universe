import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Card, Image, Form } from 'semantic-ui-react'

const FlexBox = styled.div`
display: flex;

`
const Post = styled(Card.Description)`
//    text-wrap: normal; 
`
const Title = styled.div`
max-width: 300px;
height:50px;
border:solid;
display:flex;
font-size: 10px;
`
const OrgTitle = styled.div`

`
const OrgList = styled.div`
border:solid;
`
class ShowEvent extends Component {
    state = {
        event: {},
        organizers: [],
        posts: [],
        attendees: [],
        length: 0 
    }

    componentDidMount() {

        // this.props.getProject(projectId)

        if (this.props.match.params) {
            const loggedUser = this.props.loggedUser
            const eventId = this.props.match.params.eventId
            this.getEvent(eventId, loggedUser)

        }
    }


    getEvent = (eventId) => {
        axios.get(`/api/events/${eventId}`)
            .then(res => {
                console.log("response from api", res.data)
                this.setState({ event: res.data.event, organizers: res.data.organizers, posts: res.data.posts, atttendees: res.data.attendees, length: res.data.attendees })
                console.log(this.state.attendees)

            })
            .catch((err) => {
                console.error(err)
            })



    }
    addNewAttendeeToAttendeesList = (newAttendee) => {
        // const attendeesList = [...this.state.attendees]
        // attendeesList.push(newAttendee)
        const eventId = this.props.match.params.eventId
        axios.post(`/api/events/${eventId}/attendees`, newAttendee).then(res => {
            console.log(newAttendee)
            this.getEvent(eventId)
        })

    }




    render() {



        console.log(this.state.length)
        // console.log(this.state.loggedUser)
        // console.log(this.state.attendees.length)
        const eventId = this.props.match.eventId
        const organizerlist = this.state.organizers.map((organizer, index) => {
            const organizerId = organizer.id
            const eachOrganizer = `/events/${eventId}/organizers/${organizerId}`
            return (
                <div key={index}>

                    <ul>
                        <Link to={eachOrganizer}> {organizer.name} </Link>
                        {organizer.email}
                    </ul>

                </div>
            )
        })
      
      



        const postlist = this.state.posts.map((post, index) => {

            return (

                <Post key={index}>
                    <ul>

                        <Card>
                            <Card.Content>

                                <Image floated='right' size='mini' src={post.organizer && post.organizer.photo} />
                                <Image floated='left' size='mini' src={post.attendee && post.attendee.photo} />
                                <Card.Header>{post.attendee && post.attendee.name}</Card.Header>
                                <Card.Meta>{post.title}</Card.Meta>
                                <Card.Description>
                                    <Title>    {post.comment}</Title>
                                </Card.Description>
                            </Card.Content>
                        </Card>

                    </ul>
    
                </Post>

            )
        })



        return (

            <div>
                {this.state.event.title}
                < hr ></hr >
                <OrgTitle>
                    <h4> Organizers: </h4>
                </OrgTitle>
                <OrgList>
                {organizerlist}
                </OrgList>
            <p>Location: {this.state.event.location}</p>
            <FlexBox>
                <p>Date: {this.state.event.date} Time: </p>
                <p> {this.state.event.time}</p>
                <button onClick={() => this.addNewAttendeeToAttendeesList(this.props.loggedUser)}>RSVP to this event</button>
            </FlexBox>
            <p> Details: {this.state.event.details}</p>
                Number of Attendees:{this.state.length.length}
          
        { postlist }

            </div >
        );
    }
}

export default ShowEvent;