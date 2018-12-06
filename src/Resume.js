import React from 'react';
import styled from 'styled-components';

const ResumeWrapper = styled.section`
    min-height: 100%;
    background-color: ${props => props.theme.navyColor};
`

const Resume = () => (
    <ResumeWrapper id='resume'>
        Resume
    </ResumeWrapper>
)
export default Resume;