import React from 'react';
import { ThemeProvider } from 'styled-components';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

const theme = {
    navyColor: '#343959',
    silverColor: '#e7e7e7',
    pinkColor: '#FA7C92',
    karlaFont: 'Karla, sans-serif',
    latoFont: 'Lato, sans-serif',
}

const App = () => (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <Nav />
            <Home />
            <About />
            <Portfolio />
            <Resume />
            <Contact />
            <Footer />
        </React.Fragment>
    </ThemeProvider>
)
export default App;
