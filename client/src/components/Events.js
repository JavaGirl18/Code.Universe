import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import styled from 'styled-components'


const EventsList = styled.div`
margin-top:30px;
`
class Events extends Component {

    state = {
        events: []
    }

    componentDidMount() {
        this.getEvents()
    }

    getEvents = async () => {
        try {
            const res = await axios.get('/api/events');
            this.setState({ events: res.data });
        }
        catch (err) {
            console.log(err)
            await this.setState({ error: err.message })
            return err.message
        }
    }

    render() {

        const eventslist = this.state.events.map((event, index) => {
            const eventId = event.id
            const eachEvent = `/events/${eventId}`
            return (
                <div key={index}>

                    <List animated verticalAlign='middle'>
                        <List.Item>
                            <List.Icon name='marker' />
                            <List.Content>
                                <Link to={eachEvent}><List.Header as='a'>{event.title}</List.Header></Link>
                                
                                <List.Description> Date:
                                     {event.date} Time: {event.time}
                                </List.Description><hr></hr>
                            </List.Content>
                        </List.Item>
                    </List>
                </div>
            )
        })

        return (
            <div>
                <h1>Upcoming Events</h1>
                <hr></hr>
                <EventsList>
            {eventslist}
</EventsList>

            </div>
        );
    }
}

export default Events;