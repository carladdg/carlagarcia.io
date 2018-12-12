import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const TestDiv = styled.div`
    margin: 0 7%;
`

const AboutDescription = styled.p`
    // margin: 16px 10%;
    font-family: ${props => props.theme.karlaFont};
    font-size: 1.1em;
    line-height: 1.4em;
    color: ${props => props.theme.navyColor};
`

const AboutImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const AboutImage = styled.img`
    height: 250px;
    width: 250px;
    padding: 10px 5px;

    @media screen and (max-width: 1410px) {
        height: 225px;
        width: 225px;
    }
    @media screen and (max-width: 1295px) {
        height: 200px;
        width: 200px;
    }
    @media screen and (max-width: 1180px) {
        height: 250px;
        width: 250px;
    }
    @media screen and (max-width: 805px) {
        height: 225px;
        width: 225px;
    }
    @media screen and (max-width: 750px) {
        height: 200px;
        width: 200px;
    }
    @media screen and (max-width: 550px) {
        height: 175px;
        width: 175px;
    }
    @media screen and (max-width: 495px) {
        height: 150px;
        width: 150px;
    }
    @media screen and (max-width: 435px) {
        height: 125px;
        width: 125px;
    }
    @media screen and (max-width: 375px) {
        height: 100px;
        width: 100px;
    }
`

const ForceBreak = styled.div`
    display: none;
    flex-basis: 100%;

    @media screen and (max-width: 1180px) {
        display: block;
    }
`

const About = () => (
    <Section id='about' title='About Me' titleColor='navyColor' accentColor='silverColor'>
        <TestDiv>
        <AboutDescription>
            Hello and welcome to my website! I’m <b>Carla</b>: a clumsy, curious, curly-haired coding enthusiast who’s crazy for comedy flicks and chocolate. I also tend to overuse alliteration.
        </AboutDescription>
        <AboutDescription>
            Born and raised in the Philippines, I moved to Evanston, IL in 2013 to attend <b>Northwestern University</b>. I graduated in 2017 with a bachelor’s degree in journalism, a second major in psychology and an integrated marketing communications certificate. I then worked for a year as a brand planner at Chicago-based advertising agency <b>Cramer-Krasselt</b>. In this role, I honed my research and critical thinking skills as I developed campaign strategies for various clients.
        </AboutDescription>
        <AboutDescription>
            In early 2018, I enrolled in the Northwestern University <b>Coding Boot Camp</b>, a six-month course that I completed while still working full-time. Programming was a big shift for me, but it took only a few class sessions before I was hooked. I loved seeing my code come to life on screen and constantly discovering new ways to improve and refactor. It quickly became clear that I wanted to pursue software development as a career, and I hope to begin a master’s in computer science program in 2019.
        </AboutDescription>
        <AboutImages>
            <AboutImage src='./about_images/test.jpg' alt='test1'></AboutImage>
            <AboutImage src='./about_images/test2.jpg' alt='test2'></AboutImage>
            <ForceBreak />
            <AboutImage src='./about_images/test3.jpg' alt='test3'></AboutImage>
            <AboutImage src='./about_images/test4.jpg' alt='test4'></AboutImage>
        </AboutImages>
        <AboutDescription>
            Right now, I typically build web applications using the <b>MERN stack</b> (MongoDB, Express, React and Node.js) and, of course, HTML/CSS. I also have experience working with Git, jQuery, MySQL and Handlebars. My next goals are to learn Java in order to improve my understanding of statically- and strongly-typed languages, and to introduce automated testing into my process.
        </AboutDescription>
        <AboutDescription>
            I enjoy creating things that are fun and easy to use, solve a problem or two and teach me something along the way. Feel free to check out some of my recent work below! My current favorite is <b>SETLISTr</b>, a site that lets you create Spotify playlists of artists’ most recent concert set lists. While it started as a boot camp group project, I plan to continue developing it independently. As an avid concertgoer, I’ve always wanted a tool like this to help me get psyched up for live shows – and I’m so excited that I was able to build it for myself.
        </AboutDescription>
        </TestDiv>
    </Section>
)
export default About;