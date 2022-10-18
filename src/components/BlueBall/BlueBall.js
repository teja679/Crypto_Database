import { useEffect, useState } from 'react';

function BlueBall() {
  const [x, setX] = useState(280)
  const [y, setY] = useState(42)

  const ball = {
    background: "var(--blue)",
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    position: 'absolute',
    transition: 'all 0.1s',
    // transform: 'translate(-50%, -50%)',
    // mixBlendMode: 'difference',
    left: `${x}px`,
    top: `${y}px`
  }

  const logMousePosition = (e) => {
    if(e.clientY >= 80){
        setY(e.clientY-10)
        setX(e.clientX+10)
    }
    else{
        setX(280)
        setY(42)
    }
    
  }
  useEffect(()=>{
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)
  },[])
  return (
    <div className="ball">
      <div style={ball}></div>
    </div>
  );
}

export default BlueBall;
