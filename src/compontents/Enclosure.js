import React from 'react';

class Enclosure extends React.Component{
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
        {this.props.text.content}
      </div>
    );
  }
}

export default Enclosure;