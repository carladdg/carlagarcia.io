import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`

const FooterLogo = styled.img`
    width: 22px;
    padding-left: 10px;

    :hover {
        -webkit-filter: drop-shadow(0 0 2px ${props => props.theme.pinkColor});
        filter: drop-shadow(0 0 2px ${props => props.theme.pinkColor});
    }
`

const Footer = () => (
    <StyledFooter>
        <code>Built by</code>
        <a href='https://github.com/carladdg/' target='_blank' rel='noopener noreferrer'>
            <FooterLogo src='./favicon.png' alt='Carla Garcia' />
        </a>
    </StyledFooter>
)
export default Footer;