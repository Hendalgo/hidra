import React from 'react';
import './FloatingServices.css';

const FloatingServices = () => {
  /* Define services */
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
    },
    {
      title: 'Desarrollo de Apps',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Diseño Gráfico',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
    }
  ];
  return (
    <React.Fragment>
      {
        /* go through all services
         with the map function */
        services.map((item)=>
          <div className='floating-service' key={item.title}>
            <h3 className='service-title'>
              {item.title}
            </h3>
            <p className='service-text'>
              {item.description}
            </p>
          </div>
        )
      }
    </React.Fragment>
  )
}

export default FloatingServices;