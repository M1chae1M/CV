import React from 'react';

export default class Enclosure extends React.Component{
  render(){
    const styles={
      Enclosure:{
        textAlign:'center',
        margin:'5px auto',
        color:'var(--textColor)',
        fontSize:'0.8rem',
      },
    }
    return(
      <div id='Enclosure' style={styles.Enclosure}>
        {
        this.props.text?
          this.props.text.content
            :null
      }
      </div>
    );
  }
}