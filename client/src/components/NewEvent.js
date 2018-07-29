import React, { Component } from 'react';

import { Form, Container } from 'semantic-ui-react'

class NewEvent extends Component {
    
    render() {console.log("new events")
        return (
            <Form>
                <div class="ui-form">
                    <div classs="field">
                        <input type="text" name="title">
                        </input>
                 

                </div>

                    </div>
                </Form>
            
                );
            }
        }
        
export default NewEvent;