
import React from 'react';
  
export default class AboutMe extends React.Component{
  render(){
    const styles={
      AboutMe:{
        transform:this.props.topPositions===true?'none':'scale(0%)',
        animation:this.props.topPositions===true?'sssc 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
        paddingTop:'15px',
        textAlign:'justify',
      },
    }
    return(
      <div id='AboutMe' style={styles.AboutMe} name="AboutMe">
        {
          this.props.text?
            this.props.text.content:
              null
        }
      </div>
    );
  }
}