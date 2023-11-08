import React from 'react';
import {TranslatedCTX} from '../..';
import Frame from '../Frame/Frame';
import FrameHeader from '@/pages/components/Frame/FrameHeader';
import OnloadAnimation from '@/pages/components/Frame/OnLoadAnimation';

export default class SoftSkills extends React.Component{
  render(){
    const styles={
      SoftSkills:{
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
      <TranslatedCTX.Consumer>
      {value=>{
        const {translatedTXT}=value??{};
        const {SoftSkills}=translatedTXT??{};
        const {content, header}=SoftSkills??{};
        return(
          <Frame id='Softskills' style={{...styles.SoftskillsFrames}}>
            <FrameHeader id='SoftskillsHeader'>{header}</FrameHeader>
            <OnloadAnimation>
              <div style={styles.SoftSkills} id='SoftSkills'>
                <ul>{content?.map((x, i)=><li key={i} style={styles.li}>{x}</li>)}</ul>
              </div>
            </OnloadAnimation>
          </Frame>
        )
      }}
      </TranslatedCTX.Consumer>
    )
  }
}