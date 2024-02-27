import React from 'react'
import Header from '@components/Header';
import Hero from '@components/Hero';
import FloatingServices from '@components/FloatingServices';
import AboutWork from '@components/AboutWork';
import Footer from '@components/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <section className='floating-service-container'>
        <div className='floating-services'>
          <FloatingServices />
        </div>
      </section>
      <AboutWork />
      <Footer />
    </React.Fragment>
  )
}

export default Home;