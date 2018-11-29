import React from 'react';
import styled, { keyframes } from 'styled-components';
import headshot from './headshot.jpg'

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
    min-height: 100%;
    text-align: center;
    color: ${props => props.theme.navyColor}
`

const HomeHeader = styled.div`
    padding: 50px 50px 0;
    animation: ${dropIn} 2s, ${fadeIn} 3s;
`

const Headshot = styled.img`
    width: 230px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.navyColor};
`

const Name = styled.h1`
    margin: 7px 0;
`

const HomeButtons = styled.div`
    padding: 40px 50px;
    animation: ${dropIn} 2s, ${fadeIn} 3s;
`

const StyledButton = styled.button`
    width: 200px;
    margin: 0 10px 10px 10px;
    padding: 10px 25px;
    border: 2px solid ${props => props.theme[props.color]};
    background-color: ${props => props.theme.silverColor};
    color: ${props => props.theme.navyColor};
    font-size: 20px;
    cursor: pointer;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;

    :hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        background-color: ${props => props.theme[props.color]};
    }

    :active, :focus {
        outline-color: ${props => props.theme[props.color]};
    }
`

const Home = () => (
    <HomeWrapper>
        <HomeHeader>
            <Headshot src={headshot} alt='Carla Garcia' />
            <Name>Carla Garcia</Name>
            <code>full-stack web developer</code>
        </HomeHeader>
        <HomeButtons>
            <a href='#about'><StyledButton color='pinkColor'>About</StyledButton></a>
            {/* <StyledButton color='blueColor'>Resume</StyledButton> */}
            <a href='#portfolio'><StyledButton color='greenColor'>Portfolio</StyledButton></a>
            {/* <StyledButton color='yellowColor'>Contact</StyledButton> */}
        </HomeButtons>
    </HomeWrapper>
)
export default Home;