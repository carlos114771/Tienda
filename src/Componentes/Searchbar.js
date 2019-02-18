import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
       
      
        <FormGroup>
          <Label for="exampleSearch"></Label>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search"
          />
        </FormGroup>
       
        
      </Form>
    );
  }
}