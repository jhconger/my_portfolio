import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Lorem ipsum dolor sit amet</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/ParticleAnimation.gif'
                            text='Lorem ipsum, dolor sit amet '
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Lorem ipsum dolor sit amet'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Lorem ipsum dolor sit amet'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Lorem ipsum dolor sit amet'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Lorem ipsum dolor sit amet'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;