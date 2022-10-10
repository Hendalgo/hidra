import React from 'react'
import itemsMenu from '@libs/menu.json';
import Item from './Item';

const Menu = () => {
  const items = itemsMenu;
  return (
    <div className='menu'>
      {
        items.map((i)=>
          <Item item={i} key={i.text} />
        )
      }
    </div>
  )
}

export default Menu;