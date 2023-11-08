import React from 'react';
import {TranslatedCTX} from '../..';
import SingleContactMethod from './SingleContactMethod';
import repoURL from '../../projectCBData'

import downloadIMG from '../img/18499553021577539681-512.png';
import githubIMG from '../img/contact/4422549621553664904-512.png';
import phoneIMG from '../img/contact/18238319521579177877-512 — kopia.png';
import emailIMG from '../img/contact/5876661171530077749-512 — kopia.0ff11f36ab62c460128a.png';

import Frame from '../Frame/Frame';
import FrameHeader from '@/pages/components/Frame/FrameHeader';
import OnloadAnimation from '@/pages/components/Frame/OnLoadAnimation';

const github=githubIMG.src;
const dwnlIMG=downloadIMG.src;
const email=emailIMG.src;
const telIMG=phoneIMG.src;

export default class Contact extends React.Component{
  render(){
    const {language,topPos}=this.props;
    const styles={
      Contact:{
        bottom:"0%",
        width:'100%',
        height:'fit-content',
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
      <TranslatedCTX.Consumer>
      {value=>{
        const {translatedTXT}=value??{};
        const {Contact}=translatedTXT??{};
        const {phone,Download,header}=Contact??{};
        const {pdfFile,alt}=Download??{};
        return(
          <Frame id='ContactFrame' style={{...styles.ContactFrame}}>
            <FrameHeader id='ContactHeader'>{header}</FrameHeader>
            <OnloadAnimation style={styles.Contact}>
              <div id='contactMethods' style={styles.contactMethods}>
                <SingleContactMethod href='tel:+48698907778' name={phone} src={telIMG} alt={`${phone} IMG`}/>
                <SingleContactMethod href='mailto:michalmaru10@gmail.com' name='Email' src={email} alt='email IMG'/>
                <SingleContactMethod href={`${repoURL}?tab=repositories`} name='Github' src={github} alt='github IMG'/>
                <SingleContactMethod name='Download' src={dwnlIMG} download={pdfFile} alt={alt} href={CVsrc}/>
              </div>
            </OnloadAnimation>
          </Frame>
        )
      }}
      </TranslatedCTX.Consumer>
    )
  }
}