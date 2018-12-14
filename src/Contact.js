import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Section from './Section';

const SocialIconStyle = css`
    :hover {
        -webkit-filter: drop-shadow(0 0 2px ${props => props.theme.navyColor});
        filter: drop-shadow(0 0 2px ${props => props.theme.navyColor});
    }
`

const LinkedIn = styled.i`
    ${SocialIconStyle}
    color: #0077B5
`

const GitHub = styled.i`
    ${SocialIconStyle}
    color: black;
`

const Instagram = styled.i`
    ${SocialIconStyle}
    color: transparent;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background-clip: text;
    -webkit-background-clip: text;
`

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    encode = data => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }

    handleFormSubmit = event => {
        event.preventDefault();

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            body: this.encode({ 'form-name': 'Contact', ...this.state })
        })
            .then(() => alert('Success!'))
            .catch(error => alert(error));
    }

    render = () => (
        <Section id='contact' title='Contact Me' bgColor='silverColor' titleColor='navyColor'>
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' value={this.state.name} onChange={this.handleInputChange} />
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' value={this.state.email} onChange={this.handleInputChange} />
                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message' value={this.state.message} onChange={this.handleInputChange}></textarea>
                <input id='submit' type='submit' value='Submit' />
            </form>
            <div>
                <a href='https://www.linkedin.com/in/carladdg/' target='_blank' rel='noopener noreferrer'>
                    <LinkedIn className="fab fa-linkedin fa-3x"></LinkedIn>
                </a>
                <a href='https://github.com/carladdg' target='_blank' rel='noopener noreferrer'>
                    <GitHub className="fab fa-github fa-3x"></GitHub>
                </a>
                <a href='https://www.instagram.com/carladdg/' target='_blank' rel='noopener noreferrer'>
                    <Instagram className="fab fa-instagram fa-3x"></Instagram>
                </a>
            </div>
        </Section>
    )
}
export default Contact;