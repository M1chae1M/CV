import React, {Component} from "react";
import {TranslatedContext} from '../../..';

export default class Projects extends Component{
  render(){
    const styles={
      Projects:{
        gridColumn:'1/3',
        gridRow:'4/6',
        width:'calc(300px * 2 + 4* 10px + 6px)',
      },
    }
    return(
      <TranslatedContext.Consumer>
      {value=>{
        const {translatedText, frames}=value??{};
        const {Projects}=translatedText??{};
        return(
          <div id='Projects' className='frame' style={{...frames?.frame, ...styles.Projects}}>
            <div id='ProjectsHeader' style={frames?.frameHeader}>{Projects}</div>
            {this.props.children}
          </div>
        )
      }}
      </TranslatedContext.Consumer>
    )
  }
}