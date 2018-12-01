import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: ${props => props.pageScroll ? 'blue' : 'transparent'};
    transition: background-color 1s;
`

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageScroll: false
        }
    }

    componentDidMount = () => window.addEventListener('scroll', this.handleScroll);

    handleScroll = () => {
        let scroll = window.pageYOffset;
        if (scroll > 0) {
            this.setState({ pageScroll: true });
        } else if (scroll === 0) {
            this.setState({ pageScroll: false });
        }
    }
    
    render = () => (
        <StyledNav pageScroll={this.state.pageScroll}>
            <p>Home</p>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
        </StyledNav>
    )
}
export default Nav;