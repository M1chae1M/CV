import React from 'react';
import {TranslatedCTX} from '../..';

export default class Enclosure extends React.Component{
  render(){
    const styles={
      Enclosure:{
        textAlign:'center',
        margin:'5px auto',
        color:'var(--textColor)',
        fontSize:'0.8rem',
      },
    }
    return(
      <div id='Enclosure' style={styles.Enclosure}>
        <TranslatedCTX.Consumer>
        {value=>{
          const {translatedTXT}=value??{};
          const {Enclosure}=translatedTXT??{};
          const {content}=Enclosure??{};

          return content
        }}
        </TranslatedCTX.Consumer>
      </div>
    )
  }
}