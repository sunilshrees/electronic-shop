import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <img
                    className='fimg'
                    src={require('../assets/New Project.png')}
                    alt=''
                />
                <div className='ftext'>
                    &copy; 2021 eShop. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
