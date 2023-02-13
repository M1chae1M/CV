
import React from 'react';
import Werse from './Education/Werse';

export default class Education extends React.Component{
  render(){
    const styles={
      Education:{
        transform:this.props.topPositions===true?'none':'scale(0%)',
        animation:this.props.topPositions===true?'sssc 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
      },
      ladder:{
        height:'fit-content',
      },
    }
    return(
      <div id='Education' style={styles.Education} name="Education">
        <div style={styles.ladder} id='ladder'>
          {
            this.props.text?
              this.props.text.content.map((x,i)=><Werse key={i} date={x.date} description={x.description}/>)
                :null
          }
        </div>
      </div>
    );
  }
}