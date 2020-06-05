import React from 'react';
import { useSpring, animated } from 'react-spring'



function Card(props) {
  var calc = (x, y) => [(y - window.innerHeight / 2) / 20, -(x - window.innerWidth / 2) / 20, 1.1]
  var trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  if(props.className === "me"){
    trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    calc = (x, y) => [(y - window.innerHeight / 2) / 20, -(x - window.innerWidth / 2) / 20, 1.1]
  }
  const [temp,set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  
  return (
    <animated.div
      className={`card ${props.className}`}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: temp.xys.interpolate(trans),
      backgroundImage: "url("+props.image+")" }}>
        <div className="photo-title">{props.photoTitle}</div>
      </animated.div>
    
    
  )
}

export default Card;