
import React from 'react';
import styled, {keyframes} from "styled-components";

class CubeSide extends React.Component{
  render(){
    const animate=keyframes`
      0%{transform:rotateY(${this.props.startsOn}deg) rotateX(${this.props.rotateX!==undefined?this.props.rotateX:0}deg) translateZ(${this.props.Z}px)}
      25%{transform:rotateY(${(this.props.startsOn+90)}deg) rotateX(${this.props.rotateX!==undefined?this.props.rotateX:0}deg) translateZ(${this.props.Z}px)}
      50%{transform:rotateY(${(this.props.startsOn+180)}deg) rotateX(${this.props.rotateX!==undefined?this.props.rotateX:0}deg) translateZ(${this.props.Z}px)}
      75%{transform:rotateY(${(this.props.startsOn+270)}deg) rotateX(${this.props.rotateX!==undefined?this.props.rotateX:0}deg) translateZ(${this.props.Z}px)}
      100%{transform:rotateY(${(this.props.startsOn+360)}deg) rotateX(${this.props.rotateX!==undefined?this.props.rotateX:0}deg) translateZ(${this.props.Z}px)}
      `;
    const KeyframeOnLoad=styled.div`
      animation:${animate} 7.6s ease-in-out infinite;
      width:${this.props.XY}px;
      height:${this.props.XY}px;
      border:solid black 6px;
      position:absolute;
      background-color:${this.props.bgColor};
      text-align:center;
      vertical-align:center;
      font-weight:bold;
      overflow:hidden;
      opacity:0.9;
      -webkit-user-select:none;
      -ms-user-select:none;
      user-select:none;
      `;
    return(
      <KeyframeOnLoad className='cubeSide'>
        {/* {this.props.cont} */}
        {this.props.children}
      </KeyframeOnLoad>
    );
  }
}

export default CubeSide;