import React from 'react';

class SoftSkills extends React.Component{
  render(){
    const styles={
      SoftSkills:{
        transform:this.props.topPositions===true?'none':'scale(0%)',
        animation:this.props.topPositions===true?'sssc 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
        paddingTop:'15px',
      },
      li:{
        listStylePosition:'inside',
      },
    }
    return(
      <div style={styles.SoftSkills} id='SoftSkills'>
        <ul>
          {
            this.props.text?
              this.props.text.content.map((x,i)=><li key={i} style={styles.li}>{x}</li>)
                :null
          }
        </ul>
      </div>
    );
  }
}

export default SoftSkills;