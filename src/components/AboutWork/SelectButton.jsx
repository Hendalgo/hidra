import React from 'react';

const SelectButton = ({active, img, handdlePage}) => {
  return (
    <button onClick={handdlePage} className={active?'page-select active':'page-select'}>
      <img src={img} alt="restaurantes logo" />
    </button>
  )
}

export default SelectButton;;