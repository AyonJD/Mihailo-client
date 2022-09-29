import React from 'react';
import popcornImage from '../../Assets/images/popcorn.png'
import './Landing.css';

const Landing = () => {
    return (
        <div className='mid-container'>
            <div className='landing_header_section'>
                <h1 className='landing_header'>
                    Imagine if <br />
                    <span className='snapchat'>Snapchat</span> <br />
                    had events.
                </h1>
            </div>
            <p className='landing_text'>
                Easily host and share events with your friends across any social media.
            </p>

            <div className='landing_event_image'>
                {/* <img src={popcornImage} alt="" /> */}
            </div>

            <div className='create_event'>
                <button className='create_event_button'>🎉 Create my event</button>
            </div>
        </div>
    );
};

export default Landing;