import React from 'react';

class ScrollButton extends React.Component{
  render(){
    const styles={
      downButton:{
        position:this.props.scrollToTop===false?'absolute':'fixed',
        right:this.props.scrollToTop===true?'5%':'auto',
        bottom:'10%',
        display:'grid',
        transform:this.props.scrollToTop===false?'rotate(180deg)':'none',
        borderRadius:'50%',
        textAlign:'center',
        verticalAlign:'middle',
        lineHeight:'30px',
        height:'30px',
        width:'30px',
        overflow:'hidden',
        fontSize:'1.6rem',
        border:'solid var(--violet-border-color) 3px',
        backgroundColor:'transparent',
        fontWeight:'bold',
        WebkitUserSelect:'none',
        msUserSelect:'none',
        userSelect:'none',
        zIndex:'141',
      },
      a:{
        textDecoration:'none',
        color:'black',
      },
    }
    return(
      <a href={this.props.href} style={styles.a} draggable={false}>
        <div style={styles.downButton} id='downButton'>{"^"}</div>
      </a>
    );
  }
}

export default ScrollButton;