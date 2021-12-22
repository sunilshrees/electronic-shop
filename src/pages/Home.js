import React from 'react';
import '../styles/home.css';

function Home() {
    return (
        <>
            <div className='home'>
                <div className='logo'>
                    <img
                        src={require('../assets/New Project.png')}
                        alt='logo'
                    />
                </div>
                <h1 className='tagline'>
                    An exciting place for the whole family to shop.
                </h1>
            </div>
        </>
    );
}

export default Home;
