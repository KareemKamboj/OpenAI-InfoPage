import React from 'react';
import './possibility.css';

import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id="possibility">
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>In the near future, AI will be able to do things that we didn't even know we wanted. It will be able to recognize patterns in our data that we didn't even realize were there. It will be able to invent new things that we didn't even know were possible. That's the promise of AI. That's the promise of OpenAI. </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility