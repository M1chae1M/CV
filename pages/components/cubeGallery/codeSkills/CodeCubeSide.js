import React, {Component} from 'react';

export default class CodeCubeSide extends Component{
  render(){
    const {context,src,txtColor}=this.props;
    const alt=`${context} logo`;
    const color=txtColor?txtColor:'black'
    const styles={
      img:{
        width:'30px',
        height:'30px',
      },
      color:{
        color,
      }
    }
    return(
      <>
        <div style={styles.color}>{context}</div>
        <div>
          <img src={src} alt={alt} style={styles.img} draggable={false}/>
        </div>
      </>
    )
  }
}