import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const AboutDescription = styled.p`
`

const About = () => (
    <Section id='about' title='About Me' accentColor='silverColor'>
        <AboutDescription>Hello, world</AboutDescription>
    </Section>
)
export default About;