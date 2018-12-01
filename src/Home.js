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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    background-image: url('./main-image.JPG');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 30% 50%;
    text-align: center;
    color: ${props => props.theme.navyColor};
`

const HomeTextBackground = styled.div`
    background-color: ${props => props.theme.silverColor};
    margin-bottom: 20px;
    animation: ${dropIn} 2s, ${fadeIn} 3s;
`

const SharedTextStyle = css`
    margin: 0;
    padding: 15px 30px;
    animation: ${fadeIn} 3s;
`

const StyledName = styled.h1`
    ${SharedTextStyle}
    font-size: 3em;
`

const StyledBlurb = styled.p`
    ${SharedTextStyle}
`

const Home = () => (
    <HomeWrapper>
        <HomeTextBackground>
            <StyledName>Carla Garcia</StyledName>
        </HomeTextBackground>
        <HomeTextBackground>
            <StyledBlurb>full-stack web developer</StyledBlurb>
        </HomeTextBackground>
    </HomeWrapper>
)
export default Home;