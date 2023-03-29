
import React, {Component} from 'react';
import {TranslatedContext} from '../..';

export default class AboutMe extends Component{
  render(){
    const {topPos}=this.props;
    const styles={
      AboutMe:{
        transform:topPos?'none':'scale(0%)',
        animation:topPos?'onLoadAnimation 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
        paddingTop:'15px',
        textAlign:'justify',
      },
    }
    return(
      <TranslatedContext.Consumer>
        {value=>{
          const {translatedText, frames}=value??{};
          const {AboutMe}=translatedText??{};
          const {content, header}=AboutMe??{};

          return(
            <div id='AboutMeFrame' className='frame' style={frames?.frame}>
              <div id='AboutMeHeader' style={frames?.frameHeader}>{header}</div>
              <div id='AboutMe' style={styles.AboutMe} name="AboutMe">
                {content}
              </div>
            </div>
          );
        }}
      </TranslatedContext.Consumer>
    );
  }
}