import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Card, Image, Form } from 'semantic-ui-react'


const Contain = styled.div`
width: 30%;
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB1cRdsN48EwGJmgcpxPHPOUu3jhtFCF938QAUGh__MWv7968");
border:solid;
padding:10px;
margin-top:50px;
`
const Body = styled.div`

`
class NewPost extends Component {

    state = {
        newPost: {},
        redirect: false
    }

    handleNewPostChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newPost = {
            ...this.state.newPost
        }
        newPost[attributeName] = attributeValue

        this.setState({ newPost })
    };

    addNewPost = (event) => {
        event.preventDefault()

        this
            .props
            .addNewPostToPostsList(this.state.newPost, this.props.match.params.userId)

        this.setState({ redirect: true })
    }


    render() {
        console.log("new events")
        if (this.state.redirect) {
            console.log('redirecting')
            return <Redirect push to={'/events'} />
        }
        return (
            <div>
                 <Body>
           <center> <Contain>
                <Form inverted onSubmit={this.addNewPost}>
                    <Form.Field widths='equal'>
                        <label fluid label="title">Post Title</label>
                        <input type="text" name="title" placeholder='Title of Event' onChange={this.handleNewPostChange} />
                    </Form.Field>
                    <Form.TextArea label="Comment" name="comment" placeholder="Tell us more..." onChange={this.handleNewPostChange}>
                    </Form.TextArea>
                    <Button type='submit' value="Create New Post" inverted>Submit</Button>
                </Form>
            </Contain></center>
</Body>
            </div>
        );
    }
}

export default NewPost;