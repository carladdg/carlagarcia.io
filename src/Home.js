import React from 'react';
import styled, { keyframes } from 'styled-components';
import headshot from './headshot.jpg'

const Home = () => (
    <HomeWrapper>
        <HomeHeader>
            <Headshot src={headshot} alt='Carla Garcia' />
            <Name>Carla Garcia</Name>
            <code>full-stack web developer</code>
        </HomeHeader>
        <HomeButtons>
            <StyledButton color='pink'>About</StyledButton>
            <StyledButton color='blue'>Resume</StyledButton>
            <StyledButton color='green'>Portfolio</StyledButton>
            <StyledButton color='purple'>Contact</StyledButton>
        </HomeButtons>
    </HomeWrapper>
)
export default Home;

// ------------------
// Styled Components
// ------------------

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; } 
`

const dropIn = keyframes`
    from { transform: translateY(-15%); }
    to   { transform: translateY(0%); } } 
`

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 50px;
    text-align: center;
    color: var(--navy);
`

const HomeHeader = styled.div`
    animation: ${dropIn} 2s, ${fadeIn} 3s;
`

const Headshot = styled.img`
    width: 250px;
    border-radius: 50%
    border: 2px solid var(--navy)
`

const Name = styled.h1`
    margin: 7px 0;
`

const HomeButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 40px;
    animation: ${dropIn} 2s, ${fadeIn} 3s;
`

const StyledButton = styled.button`
    width: 200px;
    margin: 0 10px 10px 10px;
    padding: 10px 25px;
    border: 2px solid var(--${props => props.color});
    background-color: var(--almostwhite);
    font-size: 20px;
    color: var(--navy);
    cursor: pointer;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;

    :hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        background-color: var(--${props => props.color});
    }

    :active, :focus {
        outline-color: var(--${props => props.color});
    }
`