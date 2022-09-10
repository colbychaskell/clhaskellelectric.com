import React from 'react';
import '../Home.css'
import logo from '../assets/logo.png'

class Hero extends React.Component {
    render() {
        return (
            <div className="hero-image">
                <div className="hero-text-box">
                    <div className="hero-text">
                        <img src={logo} alt="logo" className='hero-logo'></img>
                        <h3>Licensed Electricians Serving the Stonington, ME area since 1983. </h3>
                    </div>
                </div>        
            </div>
        );
    }
}

export default Hero;
