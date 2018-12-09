import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
    min-height: 100%;
    background-color: ${props => props.bgColor ? props.theme[props.bgColor] : 'white'};
`

const SectionContent = styled.div`
    padding: 85px 100px 75px;
    transition: padding 0.7s;

    @media screen and (max-width: 560px) {
        padding: 85px 30px 75px;
    }
`

const SectionTitle = styled.h1`
    margin: 0 0 50px;
    padding-bottom: 10px;
    border-bottom: 3px solid ${props => props.accentColor ? props.theme[props.accentColor] : 'white'};
    font-family: ${props => props.theme.latoFont};
    font-size: 2em;
    color: ${props => props.theme.navyColor};
`

const Section = props => (
    <SectionWrapper id={props.id} bgColor={props.bgColor}>
        <SectionContent>
            <SectionTitle accentColor={props.accentColor}>{props.title}</SectionTitle>
            {props.children}
        </SectionContent>
    </SectionWrapper>
)
export default Section;