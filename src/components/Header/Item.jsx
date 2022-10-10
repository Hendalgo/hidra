import React from 'react'

const Item = ({item}) => {
  const [toggleSubMenu, setToggleSubMenu] = React.useState(false);
  const onClick = (e)=>{
    e.preventDefault();0
  }
  const handdleSubMenu = ()=>{
    setToggleSubMenu(!toggleSubMenu);
  }
  return (
    <li className='item-menu' onMouseEnter={handdleSubMenu} onMouseLeave={handdleSubMenu}>
      <a onClick={onClick} href={item.uri} >
        {item.text}
      </a>
      {
        item.hasSubItems &&  toggleSubMenu
        ?<ul className='submenu'>
          {
            item.hasSubItems
            ?item.subItems.map((e)=>
              <li className='item-submenu' key={e}>
                <a onClick={onClick} href={e.uri}>
                  {e.text}
                </a>
              </li>
            ):''
          } 
        </ul>
        :''
      }
    </li>
  )
}

export default Item;