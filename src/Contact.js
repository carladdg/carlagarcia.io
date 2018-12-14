import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Section from './Section';
import Button from './Button';

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5%;
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
`

const FormLabel = styled.label`
    padding-bottom: 10px;
    font-family: ${props => props.theme.latoFont};
    font-size: 1.25em;
    color: ${props => props.theme.navyColor};
    transition: font-size 0.3s;

    @media screen and (max-width: 340px) {
        font-size: 1.1em;
    }
`

const FormTextStyle = css`
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid white;
    font-family: ${props => props.theme.karlaFont};
    font-size: 1.1em;
    color: ${props => props.theme.navyColor}
    transition: font-size 0.3s;

    @media screen and (max-width: 340px) {
        font-size: 1em;
    }
`

const FormInput = styled.input`
    ${FormTextStyle}
`

const FormTextarea = styled.textarea`
    ${FormTextStyle}
    height: 250px;
    resize: vertical;
`

const FormSubmit = styled.input`
    ${Button}
    align-self: flex-end;
    padding: 10px 30px;
    font-size: 1.1em;

    @media screen and (max-width: 340px) {
        font-size: 1em;
    }
`

const SubmissionResult = styled.p`
    margin: 30px 0 0;
    font-family: ${props => props.theme.latoFont};
    font-size: 1.25em;
    font-weight: 700;
    color: ${props => props.success ? '#20a303' : 'red'};
    transition: font-size 0.3s;

    @media screen and (max-width: 340px) {
        font-size: 1.1em;
    }
`

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 322px;
    margin-top: 50px
    padding: 50px 0 16px;
    border-top: 2px solid white;
`

const SocialIconStyle = css`
    padding: 0 8px;
    font-size: 4em;

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
            message: '',
            submitAttempt: false,
            inputError: false,
            submitError: false
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    encode = data => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ submitAttempt: true });
        
        if (this.state.name && this.state.email && this.state.message) {
            this.setState({ inputError: false });

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: this.encode({ 'form-name': 'Contact', 'name': this.state.name, 'email': this.state.email, 'message': this.state.message })
            })
                .then(() => {
                    this.setState({ 
                        submitError: false,
                        name: '',
                        email: '',
                        message: ''
                    })
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ submitError: true });
                });
        } else {
            this.setState({ inputError: true })
        }
    }

    renderSubmissionResult = () => {
        setTimeout(this.clearSubmissionResult, 1000 * 15);

        if (this.state.inputError) {
            return <SubmissionResult>Please fill out all fields.</SubmissionResult> 
        } else if (this.state.submitError) {
            return <SubmissionResult>Sorry, something went wrong. Please try again.</SubmissionResult>
        } else if (!this.state.submitError) {
            return <SubmissionResult success>Message sent!</SubmissionResult>
        }
    }

    clearSubmissionResult = () => this.setState({ submitAttempt: false });

    render = () => (
        <Section id='contact' title='Contact Me' bgColor='silverColor' titleColor='navyColor'>
            <ContactWrapper>
                <ContactForm onSubmit={this.handleFormSubmit}>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <FormInput type='text' id='name' name='name' value={this.state.name} onChange={this.handleInputChange} />
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormInput type='email' id='email' name='email' value={this.state.email} onChange={this.handleInputChange} />
                    <FormLabel htmlFor='message'>Message</FormLabel>
                    <FormTextarea id='message' name='message' value={this.state.message} onChange={this.handleInputChange} />
                    <FormSubmit id='submit' type='submit' value='Submit' dark />
                </ContactForm>
                {this.state.submitAttempt && this.renderSubmissionResult()}
                <SocialIcons>
                    <a href='https://www.linkedin.com/in/carladdg/' target='_blank' rel='noopener noreferrer'>
                        <LinkedIn className='fab fa-linkedin'></LinkedIn>
                    </a>
                    <a href='https://github.com/carladdg' target='_blank' rel='noopener noreferrer'>
                        <GitHub className='fab fa-github'></GitHub>
                    </a>
                    <a href='https://www.instagram.com/carladdg/' target='_blank' rel='noopener noreferrer'>
                        <Instagram className='fab fa-instagram'></Instagram>
                    </a>
                </SocialIcons>
            </ContactWrapper>
        </Section>
    )
}
export default Contact;