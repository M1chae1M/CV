import React,{Component} from 'react';

export default class CodeCubeSide extends Component{
  render(){
    const {context,src,txtColor,logoColor}=this.props;
    const color=txtColor?txtColor:'black'
    const styles={
      container:{
        display:'grid',
        height:'100%',
        width:'100%',
        alignContent:'center',
      },
      img:{
        width:'30px',
        height:'30px',
      },
      color:{
        color,
      },
      logo:{
        fontSize:'2rem',
        color:logoColor,
      }
    }
    return(
      <div style={styles.container}>
        <div style={styles.color}>{context}</div>
        <div style={styles.logo}>{src}</div>
      </div>
    )
  }
}