import React from 'react';
import CubeSide from './CubeSide';
// import CubeSideColors from './CubeSideColors';

const CubeSideColors=[
  'yellow',
  'darkblue',
  'orange',
  'blue',
];



class Cube extends React.Component{
  shouldComponentUpdate(){return false}
  render(){
    const styles={
      Cube:{
        animation:this.props.topPositions===true?'cubefrontback 2.5s 0.32s alternate-reverse infinite, sssc 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
        scale:0,
        color:'black',
        transform:this.props.topPositions===true?'rotateX(-20deg)':'scale(0%)',
        width:parseInt(this.props.XY)+'px',
        height:parseInt(this.props.XY)+'px',
        transformStyle:'preserve-3d',
        margin:'20px auto',
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
        {
          this.props.Side?
            (this.props.Side).map((x,i)=>
              <CubeSide
                key={i}
                XY={this.props.XY}
                Z={this.props.Z}
                bgColor={CubeSideColors[i]}
                startsOn={(i*90)} cont={x}
              />
            ):
          null
        }
        <CubeSide
          XY={this.props.XY}
          Z={this.props.Z}
          bgColor={"rgb(32 32 217 / 70%)"}
          startsOn={(0)}
          rotateX="90"
        />
        <CubeSide
          XY={this.props.XY}
          Z={this.props.Z}
          bgColor={"rgb(32 32 217 / 70%)"}
          startsOn={(0)}
          rotateX="-90"
        />
      </div>
    );
  }
}

export default Cube;