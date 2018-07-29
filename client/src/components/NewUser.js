import React, { Component } from 'react';

class NewUser extends Component {
    render() {
        return (
            <div>
                <Contain>
            <Form>
               <Form.Field widths='equal'>
      <label fluid label="title">Event Title</label>
      <input type="text" name="title" placeholder='First Name' />
    </Form.Field>
    <Form.Field widths='equal'>
      <label fluid label="title">Location</label>
      <input type="text" name="location" placeholder='Location' />
    </Form.Field>
    <Form.Field widths='equal'>
   
<label fluid label="title">Date</label>
 <input data-format="yyyy-MM-dd" type="text" name="title" control="select" /> 
    </Form.Field>
    <Form.Field widths='equal'>
   
   <label fluid label="title">Time</label>
    <input data-format="yyyy-MM-dd" type="text" name="title" control="select" /> 
       </Form.Field>
       <Form.TextArea label="Details" placeholder="Tell us more about the event...">
   
   {/* <label fluid label="title">Details</label> */}
    {/* <input data-format="yyyy-MM-dd" type="text" name="title" control="select" />  */}
       </Form.TextArea>
                </Form>
</Contain>
            </div>
        );
    }
}

export default NewUser;