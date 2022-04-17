import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {

    state = {
        data: {username: "", password: ""},
        errors: {},
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    // errors['username'] = object in state
    // errors.find(e => e.name === 'username') = array in state

    doSubmit = () => {
        //Call the server
        console.log("Submitted")
    }

    render() { 

        return (
        <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password', "password")}
                {this.renderButton('Login')}
            </form>
        </div>);
    }
}
 
export default LoginForm;