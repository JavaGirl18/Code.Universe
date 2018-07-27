import React, { Component } from 'react';
import axios from 'axios'

class ShowUser extends Component {
state={
    user: {},
    events:[]
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
            this.setState({ user:res.data.user, events:res.data.events})
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

        return (


            <div>
               {eventlist}
            </div>
        );
    }
}

export default ShowUser;