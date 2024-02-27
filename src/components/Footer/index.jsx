import React from 'react';
import { createPortal } from 'react-dom'
import './Footer.css';
const Footer = () => {
  return (
    createPortal(
        <React.Fragment>
            <section className='footer'>
                <div className='footer-start'>
                    <h6>
                    © Hidra | Derechos Reservados 2022
                    </h6>
                </div>
                <div className='footer-end'>
                    <h6>
                        Contacto
                    </h6>
                </div>
            </section>
        </React.Fragment>
    , document.getElementById('footer'))
  )
}

export default Footer;