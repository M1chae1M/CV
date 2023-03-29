import React from 'react';
import CubeSide from './CubeSide';

export default class Cube extends React.Component{
  shouldComponentUpdate(){return false}
  render(){
    const {height, topPos, XY, children, Z}=this.props;
    const styles={
      Cube:{
        animation:topPos?'cubefrontback 2.5s 0.32s alternate-reverse infinite, onLoadAnimation 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
        scale:0,
        color:'black',
        transform:topPos?'rotateX(-20deg)':'scale(0%)',
        width:parseInt(XY)+'px',
        height:parseInt(XY)+'px',
        transformStyle:'preserve-3d',
        margin:'20px auto',
        minHeight:`${height}px`,
      },
      cubeSide:{
        position:'absolute',
        width:'70px',
        height:'70px',
        lineHeight:'70px',
        textAlign:'center',
        verticalAlign:"center",
        border:'solid black 6px',
        fontWeight:'bold',
      },
      img:{
        width:'30px',
        height:'30px',
      },
      header:{
        position:'absolute',
        top:'0%',
        left:'0%',
      },
    }
    return(
      <div id='Cube' style={styles.Cube}>
        {children}
        <CubeSide XY={XY} Z={Z} bgColor={"rgb(32 32 217 / 70%)"} startsOn={(0)} rotateX={90}/>
        <CubeSide XY={XY} Z={Z} bgColor={"rgb(32 32 217 / 70%)"} startsOn={(0)} rotateX={-90}/>
      </div>
    );
  }
}