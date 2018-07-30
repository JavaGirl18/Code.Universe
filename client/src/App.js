import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/HomePage'
import Nav from './components/NavBar'

import axios from 'axios'
import Events from './components/Events'
import Event from './components/ShowEvent'
import User from './components/ShowUser'
import NewEvent from './components/NewEvent'
import NewUser from './components/NewUser'
import './App.css';




class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    try {
      const res = await axios.get('/api/users');
      this.setState({ users: res.data });
    }
    catch (err) {
      console.log(err)
      await this.setState({ error: err.message })
      return err.message
    }
  }


  addNewUserToUsersList = (newUser) => {
    axios.post('/api/users', newUser).then((res) => {
      const usersList = [...this.state.users]
      usersList.push(res.data)
      this.setState({ users: usersList })
    })
  }



  addNewEventToEventsList = (newEvent, userId) => {
    axios.post(`/api/users/${userId}/events`, newEvent, userId).then((res) => {
      this.getUsers()
    })
  }

  deleteUser = (userId) => {

    axios.delete(`/api/users/${userId}`).then((res) => {

        this.setState({
            users: res.data
        })

    })
}

  render() {
    const HomePage = (props) => {
      return (
        <Home {...props} />
      )
    }
    const NavBar = (props) => {
      return (
        <Nav {...props} />
      )
    }
    const EventsPage = (props) => {
      return (
        <Events {...props} />
      )
    }
    const ShowEvent = (props) => {
      return (
        <Event {...props} />
      )
    }
    const ShowUser = (props) => {
      return (
        <User {...props} deleteUser={this.deleteUser} />
      )
    }
    const NewEvents = (props) => {
      return (
        <NewEvent addNewEventToEventsList={this.addNewEventToEventsList}{...props} />
      )
    }
    const NewUser = (props) => {
      return (
        <NewUser addNewUserToUsersList={this.addNewUserToUsersList}{...props} />
      )
    }
    

    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' render={HomePage} />
            <Route exact path='/events' render={EventsPage} />
            <Route exact path='/events/:eventId' render={ShowEvent} />
            <Route exact path='/users/:userId' render={ShowUser} />
            <Route exact path='/users/new' render={NewUser} />
            <Route exact path='/users/:userId/events/new' render={NewEvents} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
