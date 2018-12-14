import React, { Component } from 'react';
import 'intersection-observer';
import lozad from 'lozad';
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
    karlaFont: 'Karla, sans-serif',
    latoFont: 'Lato, sans-serif',
}

class App extends Component {
    constructor(props) {
        super(props);
        this.observer = lozad();
    }

    componentDidMount = () => this.observer.observe();
    
    render = () => (
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
}
export default App;
