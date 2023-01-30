
import React from 'react';
import Werse from './Education/Werse';

class Courses extends React.Component{
  render(){
    const styles={
      Courses:{
        display:'grid',
        transform:this.props.topPositions===true?'none':'scale(0%)',
        animation:this.props.topPositions===true?'sssc 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
      },
      ladder:{
        height:'fit-content',
      },
    }
    return(
      <div id='Courses' style={styles.Courses} name="Courses">
        <div style={styles.ladder} id='ladder'>
          {
            this.props.text.content.map((x,i)=><Werse key={i} date={x.date} description={x.description}/>)
          }
        </div>
      </div>
    );
  }
}
  
export default Courses;