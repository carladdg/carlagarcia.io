import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 10px;
`

const FooterLogo = styled.img`
    margin-left: 7px;
    width: 20px;
`

const Footer = () => (
    <StyledFooter>
        <code>Built by Carla Garcia</code>
        <FooterLogo src='./favicon.png' alt='Carla Garcia' />
    </StyledFooter>
)
export default Footer;