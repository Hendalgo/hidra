import React from 'react';
import { createPortal } from 'react-dom';
import Menu from './Menu';
import './Header.css';
import logoHidraWhite from '@assets/logos/hidra-white.svg'
const Header = () => {
 
  return createPortal(
    <React.Fragment>
      <section className='header'>
        <div className='logo-container'>
          <img src={logoHidraWhite} alt="Logo hidra" />
        </div>
        <Menu />
        <div className='container'>
          <p style={{color: 'white'}}>
            X
          </p>
        </div>
      </section>
    </React.Fragment>,
    document.getElementById('header')
  )
}

export default Header;