import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

const theme = {
    navyColor: '#343959',
    silverColor: '#e7e7e7',
    yellowColor: '#FFF7C0',
    pinkColor: '#FA7C92',
    blueColor: '#6EC4DB',
    greenColor: '#66AB8C',
}

const App = () => (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <Home />
            <About />
            <Portfolio />
        </React.Fragment>
    </ThemeProvider>
)
export default App;
