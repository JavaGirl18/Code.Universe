import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FlexBox = styled.div`
display: flex;
j

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
            // const postId = post.id
            // const eachPost = `/events/${eventId}/organizers/${organizerId}`
            return (
                <div>
                    {/* <ul> */}
                           <p> {post.organizer  &&  post.organizer.name} </p> 
                           <p> {post.attendee && post.attendee.name}</p>
                           <p> {post.title}</p>
                           <p> {post.comment} </p>
                    {/* </ul> */}

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
    {this.state.event.title}
               <hr></hr>
              <h4> Organizers: </h4>{organizerlist}
            
               <p>Location: {this.state.event.location}</p>
                <FlexBox>
                <p>Date: {this.state.event.date} Time: </p>

              <p> {this.state.event.time }</p>
              </FlexBox>
              <p> Details: {this.state.event.details}</p>
 {postlist}

            </div>
        );
    }
}

export default ShowEvent;