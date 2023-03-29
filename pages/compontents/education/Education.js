
import React from 'react';
import Werse from './Werse';
import {TranslatedContext} from '../..';

export default class Education extends React.Component{
  render(){
    const {topPos}=this.props;
    const styles={
      Education:{
        transform:topPos?'none':'scale(0%)',
        animation:topPos?'onLoadAnimation 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
      },
      ladder:{
        height:'fit-content',
      },
    }
    return(
      <TranslatedContext.Consumer>
        {value=>{
          const {translatedText, frames}=value??{};
          const {Education}=translatedText??{};
          const {content, header}=Education??{};
          return(
            <div id='Education' className='frame' style={frames?.frame}>
              <div id='EducationHeader' style={frames?.frameHeader}>{header}</div>
              <div id='Education' style={styles.Education} name="Education">
                <div style={styles.ladder} id='ladder'>
                  {content?.map(({date, description},i)=><Werse key={i} date={date} description={description}/>)}
                </div>
              </div>
            </div>
          )
        }}
      </TranslatedContext.Consumer>
    );
  }
}