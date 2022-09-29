import React from 'react';
import './Landing.css';

const Landing = () => {
    return (
        <div className='mid-container'>
            <h1 className='landing_header'>
                Imagine if <br />
                <span className='snapchat'>Snapchat</span> <br />
                had events.
            </h1>
            <p className='landing_text'>
                Easily host and share events with your friends across any social media.
            </p>
        </div>
    );
};

export default Landing;