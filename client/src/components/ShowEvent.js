import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Card, Image, Form, Icon, Label } from 'semantic-ui-react'

const FlexBox = styled.div`
display: flex;

`
const Post = styled(Card.Description)`
width:1000px;
`
const Title = styled.div`
max-width: 300px;
height:50px;
// border:solid;
display:flex;
font-size: 20px;
`
const OrgTitle = styled.div`

`
const OrgName = styled.div`
color:blue;
`
const Details = styled.div`
border:solid;
background-image: url("https://images.unsplash.com/photo-1506611302792-8e9fdb8c4edf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7fec914a30ecb05636c3d2085b4c3e27&auto=format&fit=crop&w=500&q=60");
background-size: cover;
width:500px;
height:320px;
color: white;
padding:25px;
`
const OrgList = styled.div`
margin-right: 20px;
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



        console.log(this.state.event.id)
        // console.log(this.state.loggedUser)
        // console.log(this.state.attendees.length)
        const eventId = this.props.match.eventId
        const organizerlist = this.state.organizers.map((organizer, index) => {
            const organizerId = organizer.id
            const eachOrganizer = `/events/${eventId}/organizers/${organizerId}`
            return (
                <div key={index}>

                    <ul>
                        Name:  <Link to={eachOrganizer}> {organizer.name} </Link>
                        Email:  {organizer.email}
                    </ul>

                </div>
            )
        })





        const postlist = this.state.posts.map((post, index) => {

            return (

                <Post key={index}>
                    <ul>

                        <Card fluid>
                            <Card.Content>

                                <Image floated='right' size='medium' src={post.organizer && post.organizer.photo} avatar /> ||
                                <Image floated='left' size='medium' src={post.attendee && post.attendee.photo} avatar />
                                <Card.Header>{post.attendee && post.attendee.name}</Card.Header>
                                <Card.Header><OrgName>
                                        <Icon name='users' /> 
                                    {post.organizer && post.organizer.name}</OrgName>
                                    </Card.Header>
                                <Card.Meta><center><strong>{post.title}</strong></center></Card.Meta>
                                <Card.Description>
                                    <center>  {post.comment}</center>
                                </Card.Description>
                            </Card.Content>
                        </Card>

                    </ul>

                </Post>

            )
        })



        return (
            <div>
                <center> <Details>
                    <h2> {this.state.event.title}   </h2>    <button onClick={() => this.addNewAttendeeToAttendeesList(this.props.loggedUser)}>RSVP to this event</button>
                    <p>Number of Attendees:{this.state.length.length}</p>
                    < hr ></hr >
                    <button>Go to Profile </button>
                    <OrgTitle>
                        <h4> Organizers: </h4>
                    </OrgTitle>
                    <OrgList>
                        {organizerlist}
                    </OrgList>
                    <p>Location: {this.state.event.location}</p>

                    <p>Date: {this.state.event.date} </p>
                    <p> Time: {this.state.event.time}</p>

                    <p> Details: {this.state.event.details}</p>
                </Details></center>

                <center> <h2>Comments</h2><Link to={`/events/${this.state.event.id}/posts/new`}>
                    <button>Post New Comment</button></Link></center>
                <hr></hr>
                <center>{postlist}</center>

            </div >
        );
    }
}

export default ShowEvent;