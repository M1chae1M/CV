import {useInView} from 'react-intersection-observer';
import React from 'react';

export default function OnloadAnimation({children,style}){
  const [ref, inView]=useInView({});
    const styles={
      animation:'none',
      transform:'scale(0%)',
    }
    const animation={
      transform:'none',
      animation:'onLoadAnimation 0.5s var(--onloadAnimationDelay) ease-in-out both',
    }
    const stylesCompared={...styles,...style, ...(inView?animation:{})}
  return(
    <div ref={ref} style={stylesCompared}>
      {children}
    </div>
  )
}