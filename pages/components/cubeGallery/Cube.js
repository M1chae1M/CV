import React from 'react';
import OnloadAnimation from '@/pages/components/Frame/OnLoadAnimation';

export default class Cube extends React.Component{
  shouldComponentUpdate(){return false}
  render(){
    const {height, XY, children}=this.props;
    const style={
      animation:'cubefrontback 7.6s 0.32s infinite, onLoadAnimation 0.5s var(--onloadAnimationDelay) ease-in-out both',
      transform:'rotateX(-20deg)',
      scale:0,
      color:'black',
      width:parseInt(XY)+'px',
      height:parseInt(XY)+'px',
      transformStyle:'preserve-3d',
      margin:'20px auto',
      minHeight:`${height}px`,
    }
    return(
      <OnloadAnimation>
        <div id='Cube' style={style}>
          {children}
        </div>
      </OnloadAnimation>
    )
  }
}