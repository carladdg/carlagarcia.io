import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 100;
    min-height: 60px;
    width: 100%;
    background-color: ${props => props.isAtTopOfPage ? 'transparent' : 'rgba(0, 0, 0, 0.3)'};
    font-family: ${props => props.theme.karlaFont};
    font-size: 1.1em;
    transition: background-color 0.5s;

    @media screen and (max-width: 485px) {
        justify-content: space-between;
        align-items: ${props => props.isToggled ? 'flex-start' : 'center'};
        padding: ${props => props.isToggled ? '13px 0' : '0'};
    }
`

const NavContent = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 485px) {
        flex-direction: ${props => props.isToggled ? 'column' : 'row'};
        align-items: flex-start;
    }
`

const NavLink = styled.a`
    margin: 0 20px;
    padding-bottom: 3px;
    color: ${props => props.isAtTopOfPage ? props.theme.navyColor : 'white'};
    text-decoration: none;

    :hover {
        border-bottom: 1px solid ${props => props.isAtTopOfPage ? 'white' : props.theme.navyColor};
    }

    @media screen and (max-width: 485px) {
        display: ${props => props.isToggled ? 'block' : 'none'};
        margin-top: 5px;
    }
`

const NavLogoLink = styled.a`
    margin: 0 20px;

    :hover {
        -webkit-filter: drop-shadow(0 0 2px ${props => props.isAtTopOfPage ? props.theme.navyColor : 'white'});
        filter: drop-shadow(0 0 2px ${props => props.isAtTopOfPage ? props.theme.navyColor : 'white'});
    }

    @media screen and (max-width: 485px) {
        order: -1;
    }
`

const NavLogo = styled.img`
    width: 30px;
`

const NavToggler = styled.i`
    display: none;
    margin: 0 20px;
    padding-bottom: 3px;
    color: ${props => props.isAtTopOfPage ? props.theme.navyColor : 'white'};
    cursor: pointer;

    @media screen and (max-width: 485px) {
        display: block;
        padding-top: ${props => props.isToggled ? '7px' : '0'};
    }
`

const Nav = () => {
    const [isAtTopOfPage, setIsAtTopOfPage] = useState(true);
    const [isToggled, setIsToggled] = useState(false);
    const [logo, setLogo] = useState('./logos/logo-navy.png');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        let yPosition = window.pageYOffset;
        if (yPosition > 0) {
            setIsAtTopOfPage(false);
            setLogo('./logos/logo-white.png');
        } else if (yPosition === 0) {
            setIsAtTopOfPage(true);
            setLogo('./logos/logo-navy.png');
        }
    }

    const handleToggle = () => setIsToggled(!isToggled);

    return (
        <StyledNav isAtTopOfPage={isAtTopOfPage} isToggled={isToggled}>
            <NavContent isToggled={isToggled}>
                <NavLink isAtTopOfPage={isAtTopOfPage} isToggled={isToggled} href='#about'>ABOUT</NavLink>
                <NavLink isAtTopOfPage={isAtTopOfPage} isToggled={isToggled} href='#portfolio'>PORTFOLIO</NavLink>
                <NavLogoLink isAtTopOfPage={isAtTopOfPage} href='#home'>
                    <NavLogo src={logo} alt='Carla Garcia' />
                </NavLogoLink>
                <NavLink isAtTopOfPage={isAtTopOfPage} isToggled={isToggled} href='#resume'>RESUME</NavLink>
                <NavLink isAtTopOfPage={isAtTopOfPage} isToggled={isToggled} href='#contact'>CONTACT</NavLink>
            </NavContent>
            <NavToggler onClick={handleToggle} isAtTopOfPage={isAtTopOfPage} isToggled={isToggled} className="fas fa-bars fa-lg"></NavToggler>
        </StyledNav>
    )
}
export default Nav;