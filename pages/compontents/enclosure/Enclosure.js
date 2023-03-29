import React from 'react';
import {TranslatedContext} from '../..';

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
        <TranslatedContext.Consumer>
          {value=>{
            const {translatedText}=value??{};
            const {Enclosure}=translatedText??{};
            const {content}=Enclosure??{};

            return content
          }}
        </TranslatedContext.Consumer>
      </div>
    );
  }
}