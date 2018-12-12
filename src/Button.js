import { css } from 'styled-components';

const Button = css`
    border: 2px solid ${props => props.theme.silverColor};
    font-family: ${props => props.theme.karlaFont};
    color: ${props => props.theme.silverColor};
    text-decoration: none;
    transition: color 0.3s, background-color 0.5s;

    :hover {
        background-color: ${props => props.theme.silverColor};
        color: ${props => props.theme.navyColor};
    }
`
export default Button
