import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    height: 60px;
    width: 100%;
    background-color: ${props => props.scroll ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
    font-family: ${props => props.theme.karlaFont};
    transition: background-color 1s;
`

const NavLogo = styled.img`
    width: 30px;
    margin: 0 20px;

    :hover {
        -webkit-filter: drop-shadow(0 0 2px ${props => props.scroll ? 'white' : props.theme.navyColor});
        filter: drop-shadow(0 0 2px ${props => props.scroll ? 'white' : props.theme.navyColor});
    }
`

const NavLink = styled.a`
    margin: 0 20px;
    padding-bottom: 3px;
    color: ${props => props.scroll ? 'white' : props.theme.navyColor};
    text-decoration: none;

    :hover {
        border-bottom: 1px solid ${props => props.scroll ? props.theme.navyColor : 'white'};
    }

`

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: false,
            logo: './favicon.png'
        }
    }

    componentDidMount = () => window.addEventListener('scroll', this.handleScroll);

    handleScroll = () => {
        let scroll = window.pageYOffset;
        if (scroll > 0) {
            this.setState({ 
                scroll: true,
                logo: './favicon-white.png'
            });
        } else if (scroll === 0) {
            this.setState({ 
                scroll: false,
                logo: './favicon.png'
            });
        }
    }
    
    render = () => (
        <StyledNav scroll={this.state.scroll}>
            <NavLink href='#about' scroll={this.state.scroll}>ABOUT</NavLink>
            <NavLink href='#portfolio' scroll={this.state.scroll}>PORTFOLIO</NavLink>        
            <a href='#home'><NavLogo src={this.state.logo} scroll={this.state.scroll} alt='Carla Garcia' /></a>
            <NavLink href='#resume' scroll={this.state.scroll}>RESUME</NavLink>
            <NavLink href='#contact' scroll={this.state.scroll}>CONTACT</NavLink>
        </StyledNav>
    )
}
export default Nav;