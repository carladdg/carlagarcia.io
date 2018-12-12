import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Instagram = styled.i`
    color: transparent;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background-clip: text;
    -webkit-background-clip: text;
`

const Contact = () => (
    <Section id='contact' title='Contact Me' bgColor='silverColor' titleColor='navyColor'>
        <i className="fab fa-linkedin fa-3x" style={{color: '#0077B5'}}></i>
        <i className="fab fa-github fa-3x"></i>
        <Instagram className="fab fa-instagram fa-3x"></Instagram>
    </Section>
)
export default Contact;