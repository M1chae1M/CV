import React from 'react';

export default class ScrollButton extends React.Component{
  render(){
    const {scrollToTop, href}=this.props;
    const styles={
      downButton:{
        position:!scrollToTop?'absolute':'fixed',
        right:scrollToTop?'5%':'0px',
        left:!scrollToTop?'0':'none',
        marginLeft:!scrollToTop?'auto':'none',
        marginRight:!scrollToTop?'auto':'none',
        bottom:'10%',
        display:'grid',
        transform:!scrollToTop?'rotate(180deg)':'none',
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
        border:'solid var(--violet-border-color) 3px',
        color:'var(--violet-border-color)',
        fontSize:'2.2rem',
      },
      a:{
        textDecoration:'none',
        color:'black',
        overflow:'hidden',
      },
    }
    return(
      <a style={styles.a} draggable={false} id='downButtonTag' onClick={()=>{document.querySelector(href).scrollIntoView()}}>
        <div style={styles.downButton} id='downButton'className={scrollToTop?'up':'down'}>{"^"}</div>
      </a>
    );
  }
}