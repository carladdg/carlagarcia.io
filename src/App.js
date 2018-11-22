import React, { Component } from 'react';
import styled from 'styled-components';
import Home from './Home';

const CSSVariables = styled.div`
    --almostwhite: #fafafa;
    --buttermilk: #FFF7C0;
    --navy: #343959;
    --pink: #FA7C92;
    --blue: #6EC4DB;
    --green: #66AB8C;
    --purple: #675682;
`

const AppWrapper = styled.div`
    height: 100vh;
    background-color: var(--buttermilk)
`

class App extends Component {
    render() {
        return (
            <CSSVariables>
                <AppWrapper>
                    <Home />
                </AppWrapper>
            </CSSVariables>
        );
    }
}

export default App;
