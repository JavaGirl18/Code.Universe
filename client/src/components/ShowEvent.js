import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

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
            // const postId = post.id
            // const eachPost = `/events/${eventId}/organizers/${organizerId}`
            return (
                <div>
                    <ul>
                            {post.organizer && post.organizer.name}
                            {post.attendee && post.attendee.name}
                            {post.title}
                            {post.comment}
                    </ul>

                </div>
            )
        })

        // const attendeelist = this.state.attendees.map((attendee, index) => {
        //     // const postId = post.id
        //     // const eachPost = `/events/${eventId}/organizers/${organizerId}`
        //     return (
        //         <div>
        //             <ul>
        //                     {post.title}
        //                     {post.comment}
        //             </ul>

        //         </div>
        //     )
        // })
 console.log(this.state.posts.organizer)
        return (
           
            <div>

                {postlist}
                {organizerlist}
                {this.state.event.title}
                {this.state.event.location}
                {this.state.event.date}
                {this.state.event.time}
                {this.state.event.details}


            </div>
        );
    }
}

export default ShowEvent;