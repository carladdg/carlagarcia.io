import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    font-size: 1.1em;
`

const FooterLogo = styled.img`
    width: 25px;
    padding-left: 10px;

    :hover {
        -webkit-filter: drop-shadow(0 0 2px ${props => props.theme.navyColor});
        filter: drop-shadow(0 0 2px ${props => props.theme.navyColor});
    }
`

const Footer = () => (
    <StyledFooter>
        <code>Built by</code>
        <a href='https://github.com/carladdg/carlagarcia.io' target='_blank' rel='noopener noreferrer'>
            <FooterLogo src='./logos/logo-navy.png' alt='Carla Garcia' />
        </a>
    </StyledFooter>
)
export default Footer;