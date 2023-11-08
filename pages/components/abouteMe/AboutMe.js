import React, {Component} from 'react';
import {TranslatedCTX} from '../..';
import Frame from '../Frame/Frame';
import FrameHeader from '@/pages/components/Frame/FrameHeader';
import OnloadAnimation from '@/pages/components/Frame/OnLoadAnimation';

export default class AboutMe extends Component{
  render(){
    const styles={
      paddingTop:'15px',
      textAlign:'justify',
    }
    return(
      <TranslatedCTX.Consumer>
      {value=>{
        const {translatedTXT}=value??{};
        const {AboutMe}=translatedTXT??{};
        const {content, header}=AboutMe??{};
        return(
          <Frame id='AboutMeFrame'>
            <FrameHeader id='AboutMeHeader'>{header}</FrameHeader>
            <OnloadAnimation style={styles}>
              {content}
            </OnloadAnimation>
          </Frame>
        )
      }}
      </TranslatedCTX.Consumer>
    )
  }
}