import React, { Component } from 'react';
import axios from 'axios'

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
                <div>

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
                <div>

                    <ul>
                        {/* <Link to={eachOrganizer}> {organizer.name} </Link> */}
                        {orgEvent.title}
                    </ul>
                    </div>
            )
        })

        const attendeeEvents = this.state.attendeeEvents.map((attenEvent, index) => {
            // const eventId = event.id
            // const eachEvent = `/events/${eventId}/organizers/${organizerId}`
            return (
                <div>

                    <ul>
                        {/* <Link to={eachOrganizer}> {organizer.name} </Link> */}
                        {attenEvent.title}
                    </ul>
                    </div>
            )
        })

        return (


            <div>
             <h4> {this.state.user.name}</h4>
                <p> {this.state.user.email}</p> 
               <p>{this.state.user.number}</p> 
                <h1>Events you organized</h1>
               {organizerEvents}
               <h1>Events You've attended</h1>
               {attendeeEvents}
            </div>
        );
    }
}

export default ShowUser;