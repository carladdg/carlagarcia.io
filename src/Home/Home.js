import React, { Component } from 'react';
import headshot from '../headshot.jpg'
import './Home.css'
import Button from '../Button/Button';

class Home extends Component {
    render = () => (
        <div className='Home'>
            <img src={headshot} alt='Carla Garcia' className='Home-headshot' />
            <h1 className="Home-name">Carla Garcia</h1>
            <code className="Home-blurb">full-stack web developer</code>
            <div className='Home-button-wrapper'>
                <Button location='Home' text='About' />
                <Button location='Home' text='Resume' />
                <Button location='Home' text='Portfolio' />
                <Button location='Home' text='Contact' />
            </div>
        </div>
    )
}

export default Home;