import React from 'react';
import {TranslatedContext} from '../..';

export default class SoftSkills extends React.Component{
  render(){
    const {topPos}=this.props;
    const styles={
      SoftSkills:{
        transform:topPos?'none':'scale(0%)',
        animation:topPos?'onLoadAnimation 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
        paddingTop:'15px',
      },
      li:{
        listStylePosition:'inside',
      },
      SoftskillsFrames:{
        gridColumn:'1',
      },
    }
    return(
      <TranslatedContext.Consumer>
      {value=>{
        const {translatedText, frames}=value??{};
        const {SoftSkills}=translatedText??{};
        const {content, header}=SoftSkills??{};

        return(
          <div id='Softskills' className='frame' style={{...styles.SoftskillsFrames, ...frames?.frame}}>
            <div id='SoftskillsHeader' style={frames?.frameHeader}>{header}</div>
            <div style={styles.SoftSkills} id='SoftSkills'>
              <ul>{content?.map((x, i)=><li key={i} style={styles.li}>{x}</li>)}</ul>
            </div>
          </div>
        )
      }}
      </TranslatedContext.Consumer>
    );
  }
}