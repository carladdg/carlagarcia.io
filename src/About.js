import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const AboutDescription = styled.div`
    margin: 0 5%;
`

const AboutText = styled.p`
    font-family: ${props => props.theme.karlaFont};
    font-size: 1.1em;
    line-height: 1.4em;
    color: ${props => props.theme.navyColor};
`

const AboutImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0;
`

const AboutImage = styled.img`
    height: 23%;
    width: 23%;
    max-height: 250px;
    max-width: 250px;
    padding: 0 5px;

    @media screen and (max-width: 1160px) {
        height: 45%;
        width: 45%;

        :nth-child(4), :nth-child(5) {
            padding-top: 10px;
        }
    }
`

const ForceBreak = styled.div`
    display: none;
    flex-basis: 100%;

    @media screen and (max-width: 1160px) {
        display: block;
    }
`

const About = () => (
    <Section id='about' title='About Me' titleColor='navyColor' accentColor='silverColor'>
        <AboutDescription>
            <AboutText>
                Hello and welcome to my website! I’m <b>Carla</b>: a clumsy, curious, curly-haired coding enthusiast who’s crazy for comedy flicks and chocolate. I also tend to overuse alliteration.
            </AboutText>
            <AboutText>
                Born and raised in the Philippines, I moved to Evanston, IL in 2013 to attend <b>Northwestern University</b>. I graduated in 2017 with a bachelor’s degree in journalism, a second major in psychology and an integrated marketing communications certificate. I then worked for a year as a brand planner at Chicago-based advertising agency <b>Cramer-Krasselt</b>. In this role, I honed my research and critical thinking skills as I developed campaign strategies for various clients.
            </AboutText>
            <AboutText>
                In early 2018, I enrolled in the Northwestern University <b>Coding Boot Camp</b>, a six-month course that I completed while still working full-time. Programming was a big shift for me, but it took only a few class sessions before I was hooked. I loved seeing my code come to life on screen and constantly discovering new ways to improve and refactor. It quickly became clear that I wanted to pursue software development as a career, and I hope to begin a master’s in computer science program in 2019.
            </AboutText>
            <AboutImages>
                <AboutImage className='lozad' data-src='./about_images/about1.jpg' alt='About Me 1'></AboutImage>
                <AboutImage className='lozad' data-src='./about_images/about2.jpg' alt='About Me 2'></AboutImage>
                <ForceBreak />
                <AboutImage className='lozad' data-src='./about_images/about3.jpg' alt='About Me 3'></AboutImage>
                <AboutImage className='lozad' data-src='./about_images/about4.jpg' alt='About Me 4'></AboutImage>
            </AboutImages>
            <AboutText>
                Right now, I typically build web applications using the <b>MERN stack</b> (MongoDB, Express, React and Node.js) and, of course, HTML/CSS. I also have experience working with Git, jQuery, MySQL and Handlebars. My next goals are to learn Java in order to improve my understanding of statically- and strongly-typed languages, and to introduce automated testing into my process.
            </AboutText>
            <AboutText>
                I enjoy creating things that are fun and easy to use, solve a problem or two and teach me something along the way. Feel free to check out some of my recent work below! My current favorite is <b>SETLISTr</b>, a site that lets you create Spotify playlists of artists’ most recent concert set lists. While it started as a boot camp group project, I plan to continue developing it independently. As an avid concertgoer, I’ve always wanted a tool like this to help me get psyched up for live shows – and I’m so excited that I was able to build it for myself.
            </AboutText>
        </AboutDescription>
    </Section>
)
export default About;