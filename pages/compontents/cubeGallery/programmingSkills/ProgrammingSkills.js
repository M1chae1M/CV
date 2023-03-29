import React, {Component} from "react";
import {TranslatedContext} from '../../..';

export default class ProgrammingSkills extends Component{
  render(){
    return(
      <TranslatedContext.Consumer>
      {value=>{
        const {translatedText, frames}=value??{};
        const {ProgrammingSkills}=translatedText??{};

        return(
          <div id='ProgrammingSkills' className='frame' style={frames?.frame}>
            <div id='ProgrammingSkillsHeader' style={frames?.frameHeader}>{ProgrammingSkills}</div>
            {this.props.children}
          </div>
        )
      }}
      </TranslatedContext.Consumer>
    )
  }
}