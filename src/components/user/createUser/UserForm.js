import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './CreateUser.scss';

const UserForm = (props) => {
  const [user, setUser] = useState(() => {
    return {
      firstName: props.user ? props.user.firstName : '',
      lastName: props.user ? props.user.lastName : '',
      email: props.user ? props.user.email : '',
      phoneNumber: props.user ? props.user.phoneNumber : '',
      birthDay: props.user ? props.user.birthDay : ''
    }
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { 
    firstName, 
    lastName, 
    email, 
    phoneNumber,
    birthDay
     } = user;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [firstName, lastName, email, phoneNumber, birthDay];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '';
    });

    if (allFieldsFilled) {
      const user = {
        id: uuidv4(),
        firstName, 
        lastName, 
        email, 
        phoneNumber,
        birthDay
      };
      props.handleOnSubmit(user);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
          setUser((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'phoneNumber':
        if (value.match(/^[0-9\b]+$/)) {
          setUser((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setUser((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter first name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter last name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="input-control"
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email address"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Enter phone number"
            onChange={handleInputChange}
          />
        </Form.Group>
         <Form.Group controlId="birthDay">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            className="input-control"
            type="Date"
            name="birthDay"
            value={birthDay}
            placeholder="Enter Date of birth"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;