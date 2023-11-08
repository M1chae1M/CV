
import React,{Component} from 'react';
import {TranslatedCTX} from '../..';
import ScrollBTN from './ScrollBTN';
import SubText from './SubText';
import OnloadAnimation from '@/pages/components/Frame/OnLoadAnimation';

export default class LandingSCR extends Component{
    render(){
        const styles={
            LandingSCR:{
                backgroundAttachment:'fixed',
                width:'100vw',
                left:'0%',
                position:'relative',
                height:'100vh',
                display:'grid',
                fontWeight:'bold',
                textAlign:'center',
                color:'var(--bodyBackground)',
                alignItems:'center',
                justifyItems:'center',
                alignContent:'center',
                justifyContent:'center',
                zIndex:'200',
                background:'linear-gradient(38deg, #e66465, #9198e5)',
            },
            header:{
                fontFamily:"'Rubik Mono One', sans-serif",
            },
            name:{
                fontSize:'2rem',
            },
        }
      return(
        <TranslatedCTX.Consumer>
        {value=>{
            const {translatedTXT}=value??{};
            const {LandingSCR}=translatedTXT??{};
            const {subText}=LandingSCR??'';
            return(
                <div id='LandingSCR' style={styles.LandingSCR}>
                    <OnloadAnimation>
                        <div style={styles.header} id='LandingSCRHeader'>
                            <div style={styles.name}>Michał Maruszewski</div>
                            <SubText text={subText} className='SubText'></SubText>
                        </div>
                    </OnloadAnimation>
                    <ScrollBTN scrollToTop={false} href="#ChangeLANGs"/>
                </div>
            )
        }}
        </TranslatedCTX.Consumer>
      )
    }
}