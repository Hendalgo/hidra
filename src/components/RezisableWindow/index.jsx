import React from 'react'

const RezisableWindow = ({children}) => {
  const [width, setWidth] = React.useState("100%");
  const [mouse, setMouse] = React.useState();
  //Container and Mouse diff (c == container && m==mouse)
  const [cMDiff, setCMDiff] = React.useState();
  //Is dragged or not dragged state
  const [dragged, setDragged] = React.useState(false);
  //Reference to browser and drag button container
  const container = React.useRef();
  const handdleMouse = (e)=>{
    setMouse({x: e.clientX, y: e.clientY});  
    if (dragged) {
      //Container width
      const cWidth = container.current.clientWidth;
      const cPos = container.current.getBoundingClientRect().right;
      
      //Diference Distante between Width and Position from container
      const cDiff = cPos - cWidth;
      console.log(cDiff);
      /* Mouse position by subtracting the difference between 
      the container size and the width, so that the relationship 
      between the container width and the mouse position will be the same. */
      const mousePos= mouse.x - cDiff;
      cMDiff?null:setCMDiff(cWidth - mousePos);
      const maxWidth = container.current.parentNode.clientWidth;
      const minWidht = 350;
      const newWidth = mousePos+cMDiff;
      (newWidth <= maxWidth && newWidth >= minWidht )?setWidth(newWidth): null;
    }
  }
  return (
    <React.Fragment>
      <div ref={container}  className='ab-work-nav' style={{width}}>
        <div className='top'>
        </div>  
        <div className='browser'>
          {children}
          <button onMouseLeave={()=>setCMDiff(false)} onMouseMove={handdleMouse} onMouseDown={()=>setDragged(true)} onMouseUp={()=>{setDragged(false); setCMDiff(false)}} className='lateral-bar' ></button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RezisableWindow