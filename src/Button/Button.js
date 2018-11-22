import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
    render = () => (
        <button className={`${this.props.location}-button ${this.props.text}-button`}>
            {this.props.text}
        </button>
    )
}

export default Button;