import React from 'react';

class ProgrammingCubeSide extends React.Component{
  render(){
    const styles={
        ProgrammingCubeSide:{

        },
        img:{
          width:'30px',
          height:'30px',
        },
    }
    return(
      <React.Fragment>
        <div>{this.props.context}</div>
        <div>
          <img src={this.props.src} alt={this.props.context+' logo'} style={styles.img} draggable={false}/>
        </div>
      </React.Fragment>
    );
  }
}
  
export default ProgrammingCubeSide;