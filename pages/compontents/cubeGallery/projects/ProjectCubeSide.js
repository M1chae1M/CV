import React, {Component} from "react";

export default class ProjectCudeSide extends Component{
  render(){
    const {href, src, alt, id}=this.props;
    const styles={
      img:{
        height:'100%',
      },
      CubeSideWithProject:{
        display:'flex',
        justifyContent:'center',
        height:'100%',
        width:'100%',
      },
    }
    return(
      <a href={href} target="_blank" rel="noreferrer" draggable={false}>
        <div id={id} style={styles.CubeSideWithProject}>
          <img src={src} style={styles.img} alt={alt} draggable={false}/>
        </div>
      </a>
    )
  }
}