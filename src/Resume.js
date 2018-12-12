import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Button from './Button';

const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15%;
    transition: margin 0.5s;

    @media screen and (max-width: 1200px) {
        margin: 0 3%;
    }
`

const ResumeImage = styled.img`
    width: 100%;
    height: 100%;
`

const ResumeButton = styled.a`
    ${Button};
    margin: 50px 0 16px;
    font-size: 1.25em;

    @media screen and (max-width: 340px) {
        font-size: 1em;
    }
`

const Resume = () => (
    <Section id='resume' title='Resume' bgColor='navyColor' accentColor='silverColor'>
        <ResumeContainer>
            <ResumeImage className='lozad' data-src='./resumes/resume.jpg' alt='Resume' />
            <ResumeButton href='./resumes/CGARCIA_Resume.pdf' download>Download PDF</ResumeButton>
        </ResumeContainer>
    </Section>
)
export default Resume;