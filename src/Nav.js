import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    height: 60px;
    width: 100%;
    background-color: ${props => props.scroll ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
    font-family: ${props => props.theme.karlaFont};
    transition: background-color 1s;

    @media screen and (max-width: 480px) {
        flex-direction: ${props => props.toggle ? 'column' : 'row'};
        justify-content: space-between;
    }
`

const NavLogoLink = styled.a`
    margin: 0 20px;

    :hover {
        -webkit-filter: drop-shadow(0 0 2px ${props => props.scroll ? 'white' : props.theme.navyColor});
        filter: drop-shadow(0 0 2px ${props => props.scroll ? 'white' : props.theme.navyColor});
    }

    @media screen and (max-width: 480px) {
        order: -1;
    }
`

const NavLogo = styled.img`
    width: 30px;
`

const NavLink = styled.a`
    margin: 0 20px;
    padding-bottom: 3px;
    color: ${props => props.scroll ? 'white' : props.theme.navyColor};
    text-decoration: none;

    :hover {
        border-bottom: 1px solid ${props => props.scroll ? props.theme.navyColor : 'white'};
    }

    @media screen and (max-width: 480px) {
        display: ${props => props.toggle ? 'block' : 'none'};
    }
`

const NavToggler = styled.i`
    display: none;
    margin: 0 20px;
    padding-bottom: 3px;
    color: ${props => props.scroll ? 'white' : props.theme.navyColor};

    @media screen and (max-width: 480px) {
        display: block;
    }
`

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: false,
            toggle: false,
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

    handleToggle = () => {
        this.setState(prevState => ({ 
            toggle: !prevState.toggle 
        }));
        console.log(this.state.toggle);
    }
    
    render = () => (
        <StyledNav scroll={this.state.scroll} toggle={this.state.toggle}>
            <NavLink scroll={this.state.scroll} toggle={this.state.toggle} href='#about'>ABOUT</NavLink>
            <NavLink scroll={this.state.scroll} toggle={this.state.toggle} href='#portfolio'>PORTFOLIO</NavLink>        
            <NavLogoLink scroll={this.state.scroll} href='#home'>
                <NavLogo src={this.state.logo} alt='Carla Garcia' />
            </NavLogoLink>
            <NavLink scroll={this.state.scroll} toggle={this.state.toggle} href='#resume'>RESUME</NavLink>
            <NavLink scroll={this.state.scroll} toggle={this.state.toggle} href='#contact'>CONTACT</NavLink>
            <NavToggler scroll={this.state.scroll} onClick={this.handleToggle} className="fas fa-bars fa-lg"></NavToggler>
        </StyledNav>
    )
}
export default Nav;