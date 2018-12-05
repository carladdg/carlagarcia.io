import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
    min-height: 100%;
    background-color: ${props => props.theme.silverColor};
`

const About = () => (
    <AboutWrapper id='about'>
        About
    </AboutWrapper>
)
export default About;