import { css } from 'styled-components';

const Button = css`
    border: 2px solid ${props => props.dark ? props.theme.navyColor : props.theme.silverColor};
    background-color: transparent;
    font-family: ${props => props.theme.karlaFont};
    color: ${props => props.dark ? props.theme.navyColor : props.theme.silverColor};
    text-decoration: none;
    transition: color 0.3s, background-color 0.5s, font-size: 0.3s;

    :hover {
        background-color: ${props => props.dark ? props.theme.navyColor : props.theme.silverColor};
        color: ${props => props.dark ? props.theme.silverColor : props.theme.navyColor};
    }
`
export default Button
