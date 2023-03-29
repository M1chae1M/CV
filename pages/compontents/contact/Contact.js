import React from 'react';
import {TranslatedContext} from '../..';
import SingleContactMethod from './SingleContactMethod';

import downloadIMG from '../img/18499553021577539681-512.png';
import githubIMG from '../img/contact/4422549621553664904-512.png';
import phoneIMG from '../img/contact/18238319521579177877-512 — kopia.png';
import emailIMG from '../img/contact/5876661171530077749-512 — kopia.0ff11f36ab62c460128a.png';


export default class Contact extends React.Component{
  render(){
    const {language, topPos}=this.props;
    const styles={
      Contact:{
        bottom:"0%",
        width:'100%',
        height:'fit-content',
        transform:topPos===true?'none':'scale(0%)',
        animation:topPos===true?'onLoadAnimation 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
        WebkitUserSelect:'none',
        MsUserSelect:'none',
        userSelect:'none',
      },
      contactMethods:{
        display:'grid',
        width:'100%',
        height:'auto',
        gridTemplateColumns:'1fr 1fr 1fr 1fr',
      },
      ContactFrame:{
        gridColumn:'1/3',
        width:'calc(300px * 2 + 4* 10px + 6px)',
      },
    }
    const CVsrc=language==='PL'?'./pdf/CV_Michał_Maruszewski_PL.pdf':'./pdf/CV_Michał_Maruszewski_EN.pdf'
    return(
      <TranslatedContext.Consumer>
      {value=>{
        const {translatedText, frames}=value??{};
        const {Contact}=translatedText??{};
        const {phone, Download, header}=Contact??{};
        const {downloadedFileName, alt}=Download??{};

        return(
          <div id='ContactFrame' className='frame' style={{...frames?.frame, ...styles.ContactFrame}}>
            <div id='ContactHeader' style={frames?.frameHeader}>{header}</div>
            <div id='Contact' style={styles.Contact} name="Contact">
              <div id='contactMethods' style={styles.contactMethods}>
                <SingleContactMethod href='tel:+48698907778' name={phone} src={phoneIMG.src} alt={phone+'IMG'}/>
                <SingleContactMethod href='mailto:michalmaru10@gmail.com' name={"Email"} src={emailIMG.src} alt={'email IMG'}/>
                <SingleContactMethod href='https://github.com/M1chae1M?tab=repositories' name={"Github"} src={githubIMG.src} alt={'github IMG'}/>
                <SingleContactMethod name={"Download"} src={downloadIMG.src} download={downloadedFileName} alt={alt} href={CVsrc}/>
              </div>
            </div>
          </div>
        )
      }}
      </TranslatedContext.Consumer>
    );
  }
}