import React from 'react';
import Button from '@components/Button';
import './Hero.css';
import head from '@assets/img/floating-head.png';
import circle from  '@assets/img/circle.png';

const Hero = () => {
  return (
    <React.Fragment>
      <section className='hero-container'>
        <div className='hero'>
          <div className='hero-info'>
            <h5 className='hero-head'>SOMOS UNA AGENCIA CREATIVA</h5>
            <div className='hero-title-container'>
              <h1 className='hero-title-r'>Todo lo que sueñes</h1>
              <h1 className='hero-title-m'>podemos crearlo.</h1>
            </div>
            <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque diam enim proin.</p>
            <div className='button-container'>
              <Button type='gold' text='Portafolio' />
              <Button type='black' text='Portafolio' />
            </div>
          </div>
          <div className="hero-img">
            <img className='floating-head' src={head} alt="Cabeza de estatua flotante" />
            <div className='circle-container'>
              <img className='circle' src={circle} alt="Rotating circle" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Hero;