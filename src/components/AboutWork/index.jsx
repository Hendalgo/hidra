import React from 'react';
import './AboutWork.css';
import bodegones from '@assets/logos/bodegones.svg';
import tuTiendita from '@assets/logos/tu-tiendita.svg';
import restaurantes from '@assets/logos/restaurantes.svg';
import SelectButton from './SelectButton';
import RezisableWindow from '../RezisableWindow';

const AboutWork = () => {
  const [page, setPage] = React.useState(
    {
      uri: 'https:/restaurants.gq',
      title: 'Restaurantes'
    }
  );
  const [active, setActive] = React.useState({
    restaurantes: true,
    tuTiendita: false,
    bodegones: false,
  });
  /* Events to change iframe url */
  const handdleRestaurants = ()=>{
    setActive({
      restaurantes: true,
      tuTiendita: false,
      bodegones: false,
    });
    setPage(
      {
        uri: 'https://restaurants.gq',
        title: 'Tu Tiendita'
      }
    )
  }
  const handdleTutiendita = ()=>{
    setActive({
      restaurantes: false,
      tuTiendita: true,
      bodegones: false,
    });
    setPage(
      {
        uri: 'https://tutiendita.shop',
        title: 'Bodegones'
      }
    )
  }
  const handdleBodegon = ()=>{
    setActive({
      restaurantes: false,
      tuTiendita: false,
      bodegones: true,
    });
    setPage(
      {
        uri: 'https://bodegones.tk',
        title: 'Restaurantes'
      }
    )
  }
  
  return (
    <React.Fragment>
      <section className='ab-work-container'>
        <div className='ab-work'>
          <div className='ab-work-text'>
            <h1 className='ab-work-title'>
              Un poco de <br/> nuestro trabajo
            </h1>
            <p className='ab-work-description'>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
            </p>
          </div>
          <div className='ab-work-buttons'>
            <SelectButton 
              active={active.restaurantes} 
              img= {restaurantes} 
              handdlePage= {handdleRestaurants} 
            />
            <SelectButton 
              active={active.tuTiendita} 
              img= {tuTiendita} 
              handdlePage= {handdleTutiendita} 
            />
            <SelectButton 
              active={active.bodegones} 
              img= {bodegones} 
              handdlePage= {handdleBodegon} 
            />
          </div>
          <RezisableWindow>
              <iframe src={page.uri} frameBorder="0"></iframe>
          </RezisableWindow>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutWork;