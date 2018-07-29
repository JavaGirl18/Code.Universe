import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import ShowEvent from './ShowEvent'

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
                <div>
                    <li>

                        <Link to={eachEvent}> {event.title} </Link> 
                        
                       Date: {event.date} Time: {event.time}
                    </li>  
               

    
                </div>
            )
        })

        return (
            <div>
                {eventslist}
              
                
            </div>
        );
    }
}

export default Events;