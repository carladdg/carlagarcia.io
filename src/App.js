import React from 'react';
import { ThemeProvider } from 'styled-components';
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

const App = () => (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
)
export default App;
