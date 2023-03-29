
import React, {Component} from 'react';
import Werse from './Werse';
import {TranslatedContext} from '../..';

export default class Courses extends Component{
  render(){
    const {topPos}=this.props;
    const styles={
      Courses:{
        display:'grid',
        transform:topPos?'none':'scale(0%)',
        animation:topPos?'onLoadAnimation 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
      },
      ladder:{
        height:'fit-content',
      },
      CoursesFrame:{
        gridColumn:'2',
        gridRow:'2/4',
      },
    }
    return(
      <TranslatedContext.Consumer>
      {value=>{
        const {translatedText, frames}=value??{};
        const {Courses}=translatedText??{};
        const {content, header}=Courses??{};

        return(
          <div id='CoursesFrame' className='frame' style={{...styles.CoursesFrame,...frames?.frame}}>
            <div id='CoursesHeader' style={frames?.frameHeader}>{header}</div>
            <div id='Courses' style={styles.Courses} name="Courses">
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