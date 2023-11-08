
import React from 'react';
import Werse from './Werse';
import {TranslatedCTX} from '../..';
import Frame from '../Frame/Frame';
import FrameHeader from '@/pages/components/Frame/FrameHeader';
import OnloadAnimation from '@/pages/components/Frame/OnLoadAnimation';

export default class Education extends React.Component{
  render(){
    const styles={
      ladder:{
        height:'fit-content',
      },
    }
    return(
      <TranslatedCTX.Consumer>
      {value=>{
        const {translatedTXT}=value??{};
        const {Education}=translatedTXT??{};
        const {content,header}=Education??{};
        return(
          <Frame id='Education'>
            <FrameHeader id='EducationHeader'>{header}</FrameHeader>
            <OnloadAnimation>
              <div style={styles.ladder} id='ladder'>
                {content?.map(({date, description},i)=><Werse key={i} date={date} description={description}/>)}
              </div>
            </OnloadAnimation>
          </Frame>
        )
      }}
      </TranslatedCTX.Consumer>
    )
  }
}