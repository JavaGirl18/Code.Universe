import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Card, Image } from 'semantic-ui-react'

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
class ShowEvent extends Component {
    state = {
        event: {},
        organizers: [],
        posts: [],
        // attendees: []
    }

    componentDidMount() {

        // this.props.getProject(projectId)

        if (this.props.match.params) {
            // console.log("PROPS", this.props)
            const eventId = this.props.match.params.eventId
            this.getEvent(eventId)

        }
    }


    getEvent = (eventId) => {
        axios.get(`/api/events/${eventId}`)
            .then(res => {
                console.log("response from api", res.data)
                this.setState({ event: res.data.event, organizers: res.data.organizers, posts: res.data.posts })
                // console.log(this.state)

            })
            .catch((err) => {
                console.error(err)
            })



    }




    render() {
        const eventId = this.props.match.eventId
        const organizerlist = this.state.organizers.map((organizer, index) => {
            const organizerId = organizer.id
            const eachOrganizer = `/events/${eventId}/organizers/${organizerId}`
            return (
                <div>

                    <ul>
                        <Link to={eachOrganizer}> {organizer.name} </Link>
                        {organizer.email}
                    </ul>

                </div>
            )
        })

        const postlist = this.state.posts.map((post, index) => {
         
            return (

                <Post key ={index}>
                <ul>
                
                        <Card>
                            <Card.Content>
                                
                                <Image floated='right' size='mini' src={post.organizer && post.organizer.photo}/> 
                                <Image floated='left' size='mini' src={post.attendee && post.attendee.photo}/>
                                <Card.Header>{post.attendee && post.attendee.name}</Card.Header>
                              <Card.Meta>{post.title}</Card.Meta>
                               <Card.Description>
                                  <Title>    {post.comment}</Title> 
                                </Card.Description>
                            </Card.Content>
                        </Card>
                      
                        </ul>
                        {/* <ul>
                     
                        <Card>
                            <Card.Content>
                            <Image floated='left' size='mini' src={post.organizer && post.organizer.photo}/>
                            <Card.Header>{post.organizer && post.organizer.name}</Card.Header>
                            <Card.Meta>{post.title}</Card.Meta>
                            <Card.Description>
                                    {post.comment}
                                </Card.Description>
                            </Card.Content>

                        </Card>
                 
                    </ul> */}
</Post>
           
            )
    })



    return(
           
            <div>
    { this.state.event.title }
    < hr ></hr >
        <h4> Organizers: </h4>{ organizerlist }

<p>Location: {this.state.event.location}</p>
    <FlexBox>
        <p>Date: {this.state.event.date} Time: </p>

        <p> {this.state.event.time}</p>
        <button>RSVP to this event</button>
    </FlexBox>
    <p> Details: {this.state.event.details}</p>
    
 { postlist }

            </div >
        );
    }
}

export default ShowEvent;