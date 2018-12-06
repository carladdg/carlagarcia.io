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
    height: 250px;
`

const HomeTextBackground = styled.div`
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: ${props => props.theme.silverColor};
    animation: ${dropIn} 2s, ${fadeIn} 3s;
`

const SharedTextStyle = css`
    margin: 0;
    padding: 15px 30px;
    animation: ${fadeIn} 3s;
`

const StyledName = styled.h1`
    ${SharedTextStyle}
    font-family: ${props => props.theme.latoFont};
    font-size: 3em;
`

const StyledBlurb = styled.p`
    ${SharedTextStyle}
    font-family: ${props => props.theme.karlaFont};
    font-size: 1.25em;
`

const Home = () => (
    <HomeWrapper id='home'>
        <HomeContent>
            <HomeTextBackground>
                <StyledName>Carla Garcia</StyledName>
            </HomeTextBackground>
            <HomeTextBackground>
                <StyledBlurb>full-stack web developer</StyledBlurb>
            </HomeTextBackground>
        </HomeContent>
    </HomeWrapper>
)
export default Home;