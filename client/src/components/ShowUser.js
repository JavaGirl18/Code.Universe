import React, { Component } from 'react';
import axios from 'axios'
import { Button, Card, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Events = styled.div`
display: flex;
flex-wrap:wrap;


`
class ShowUser extends Component {
state={
    user: {},
    events:[],
    organizerEvents:[],
    attendeeEvents:[]
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
            this.setState({ user:res.data.user, events:res.data.events, organizerEvents:res.data.organizer_events, attendeeEvents:res.data.attendee_events})
            console.log(this.state)

        })
        .catch((err) => {
            console.error(err)
        })

}



    render() {

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
            // const eventId = event.id
            // const eachEvent = `/events/${eventId}/organizers/${organizerId}`
            return (
                <div key={index}>

                    <ul>
                        {/* <Link to={eachOrganizer}> {organizer.name} </Link> */}
                        {orgEvent.title}
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
                        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                        <Link to={eachEvent}> <Card.Header>{attenEvent.title}</Card.Header></Link>
                <Card.Meta>{attenEvent.date}</Card.Meta>
                {/* <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description> */}
                <Card.Content extra>
        <div className='ui two buttons'>
         <Link to=''><Button basic color='green'>View</Button></Link>
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
                <h1>Events You've Organized</h1>
               {organizerEvents}
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