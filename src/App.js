import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Home from './Home';

const theme = {
    whiteColor: '#fafafa',
    yellowColor: '#FFF7C0',
    navyColor: '#343959',
    pinkColor: '#FA7C92',
    blueColor: '#6EC4DB',
    greenColor: '#66AB8C',
    purpleColor: '#675682'
}

const AppWrapper = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.yellowColor}
`

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <AppWrapper>
                    <Home />
                </AppWrapper>
            </ThemeProvider>
        );
    }
}

export default App;
