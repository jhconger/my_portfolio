import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/*<img src={require('../public/images/ParticleAnimation.gif')}/>*/}
            <h1>"Seneca, “Luck is what happens when preparation meets opportunity.” </h1>
            <p>What are you waiting for?</p>
            {/*<div className='hero-btns'>*/}
            {/*    <Button*/}
            {/*        className='btns'*/}
            {/*        buttonStyle='btn--outline'*/}
            {/*        buttonSize='btn--large'*/}
            {/*    >*/}
            {/*        GET STARTED*/}
            {/*    </Button>*/}
                {/*<Button*/}
                {/*    className='btns'*/}
                {/*    buttonStyle='btn--primary'*/}
                {/*    buttonSize='btn--large'*/}
                {/*    onClick={console.log('hey')}*/}
                {/*>*/}
                {/*    WATCH TRAILER <i className='far fa-play-circle' />*/}
                {/*</Button>*/}
            {/*</div>*/}
        </div>
    );
}

export default HeroSection;