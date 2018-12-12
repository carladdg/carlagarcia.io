import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; } 
`

const dropIn = keyframes`
    from { transform: translateY(-1000%); }
    to   { transform: translateY(0%); } } 
`

const HomeWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    background-image: url('./main-image.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 30% 60%;
    text-align: center;
    color: ${props => props.theme.navyColor};
    animation: ${fadeIn} 1s
`

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    height: 275px;
`

const HomeTextBackground = styled.div`
    margin-bottom: 20px;
    background-color: ${props => props.theme.silverColor};
    animation: ${dropIn} 2s, ${fadeIn} 3s;
`

const HomeTextStyle = css`
    margin: 0;
    padding: 15px 30px;
    animation: ${fadeIn} 3s;
    transition: font-size 0.5s;
`

const HomeName = styled.h1`
    ${HomeTextStyle}
    font-family: ${props => props.theme.latoFont};
    font-size: 3em;

    @media screen and (max-width: 340px) {
        font-size: 2.5em;
    }
`

const HomeBlurb = styled.p`
    ${HomeTextStyle}
    font-family: ${props => props.theme.karlaFont};
    font-size: 1.25em;

    @media screen and (max-width: 340px) {
        font-size: 1em;
    }
`

const Home = () => (
    <HomeWrapper id='home'>
        <HomeContent>
            <HomeTextBackground>
                <HomeName>Carla Garcia</HomeName>
            </HomeTextBackground>
            <HomeTextBackground>
                <HomeBlurb>full-stack web developer</HomeBlurb>
            </HomeTextBackground>
        </HomeContent>
    </HomeWrapper>
)
export default Home;