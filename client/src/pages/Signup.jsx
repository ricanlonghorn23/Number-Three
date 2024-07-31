import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
      <Icon name='heartbeat' /> Sign-up and start adopting animals!
      </Header>
      <Form onSubmit={handleFormSubmit} size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' id="username"  name="username" type="text" value={formState.name} onChange={handleChange}/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' id="password" name="email" type="email" value={formState.email} onChange={handleChange} />
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' id="password" name="password" type="password" value={formState.password} onChange={handleChange} />
          <Button color='teal' fluid size='large'> Sign Up </Button>
        </Segment>
      </Form>
      <Message>
        Already a member? <a href='/'>Login</a>
      </Message>
    </Grid.Column>
  </Grid>
  );
}

export default Signup;