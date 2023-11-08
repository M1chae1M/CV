const CubeSide=({startsOn=0, rotateX=0, Z, XY, bgColor, children})=>{
  const style={
    transform:`rotateY(${startsOn+0}deg) rotateX(${rotateX}deg) translateZ(${Z}px)`,
    width:`${XY}px`,
    height:`${XY}px`,
    border:'solid black 6px',
    position:'absolute',
    backgroundColor:`${bgColor}`,
    textAlign:'center',
    verticalAlign:'center',
    fontWeight:'bold',
    overflow:'hidden',
    opacity:'0.9',
    userSelect:'none !important',
  }
  return <div style={style} className='cubeSide'>{children}</div>
}

export default CubeSide