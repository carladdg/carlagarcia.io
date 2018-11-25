import React from 'react';
import styled, { keyframes } from 'styled-components';
import headshot from './headshot.jpg'
import Footer from './Footer';

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; } 
`

const dropIn = keyframes`
    from { transform: translateY(-15%); }
    to   { transform: translateY(0%); } } 
`

const HomeBackground = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    text-align: center;
    background-color: ${props => props.theme.yellowColor};
    color: ${props => props.theme.navyColor};
`

const HomeContent = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`

const HomeHeader = styled.div`
    animation: ${dropIn} 2s, ${fadeIn} 3s;
`

const Headshot = styled.img`
    width: 250px;
    border-radius: 50%
    border: 2px solid ${props => props.theme.navyColor}
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
    border: 2px solid ${props => props.theme[props.color]};
    background-color: ${props => props.theme.whiteColor};
    font-size: 20px;
    color: ${props => props.theme.navyColor};
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
    <HomeBackground>
        <HomeContent>
            <HomeHeader>
                <Headshot src={headshot} alt='Carla Garcia' />
                <Name>Carla Garcia</Name>
                <code>full-stack web developer</code>
            </HomeHeader>
            <HomeButtons>
                <StyledButton color='pinkColor'>About</StyledButton>
                <StyledButton color='blueColor'>Resume</StyledButton>
                <StyledButton color='greenColor'>Portfolio</StyledButton>
                <StyledButton color='purpleColor'>Contact</StyledButton>
            </HomeButtons>
        </HomeContent>
        <Footer />
    </HomeBackground>
)
export default Home;