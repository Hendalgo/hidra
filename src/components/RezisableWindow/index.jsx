import React from 'react'

const RezisableWindow = ({children, title}) => {
  const [translate, setTranslate]= React.useState(0);
  const [width, setWidth] = React.useState(400);//Container for draggable element Width
  const [mouse, setMouse] = React.useState();//Mouse position in page
  const [cMDiff, setCMDiff] = React.useState();//Container and Mouse diff (c == container && m==mouse)
  const [dragged, setDragged] = React.useState(false);//Is dragged or not dragged state
  const container = React.useRef();  //Reference to draggable container and drag button
  const handdleMouse = (e)=>{
    setMouse({x: e.clientX, y: e.clientY});  //setCurrent mouse position    
      //Container width
      const cWidth = container.current.clientWidth;
      const cPos = container.current.getBoundingClientRect().right;
      
      //Diference Distante between Width and Position from container
      const cDiff = cPos - cWidth;
      /* Mouse position by subtracting the difference between 
      the container size and the width, so that the relationship 
      between the container width and the mouse position will be the same. */
      const mousePos= mouse.x - cDiff;
      cMDiff?null:setCMDiff(cWidth - mousePos);
      const maxWidth = container.current.parentNode.clientWidth;
      const minWidth = 400;
      const newWidth = mousePos+cMDiff;
      (newWidth <= maxWidth && newWidth >= minWidth )?setWidth(newWidth): null;
      (newWidth <= maxWidth && newWidth >= minWidth )?setTranslate(newWidth-minWidth): null;
  }
  const dragStart = (e)=>{
    setDragged(true);
    let crt = document.getElementsByClassName('lateral-bar')[0].cloneNode(true);
    crt.style.display = "none";
    e.dataTransfer.setDragImage(crt, 0,0);
    e.dataTransfer.effectAllowed =  "move";
  }
  return (
    <React.Fragment>
      <div className='ab-work-nav relative' >
        <div ref={container}  className='browser' style={{width, zIndex: 1}}>
          <div className="iframe-container">
            <div className='top'>
              <div className="controls">
                <h6>
                  • • •
                </h6>
              </div>
              <div className="title">
                <h6>Hidra - {title}</h6>
              </div>
              <div className='after-title'></div>
            </div>
            {children}
          </div>
        </div>
        <div 
          className="absolute inset-y-0" 
          style={{right: "-1.375rem", width: "calc(100% - 400px + 1.375rem)",  zIndex: dragged? 99:null}}>
          <div
            draggable={true}
            onDragStart={(e)=>dragStart(e)}
            onDrag={handdleMouse}
            onDragEnd={()=>setDragged(false)}
            style={{ 
              transform: translate === 0?null: `translate3d(${translate}px, 0px, 0px) scale(1, 1)`
            }} 
            className='lateral-bar absolute z-10 left-0 p-2 -mt-6 hidden demo-sm:flex items-center justify-center pointer-events-auto cursor-ew-resize'>
            <div
              className='w-1.5 h-8 bg-slate-500/60 rounded-full' >  
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RezisableWindow;