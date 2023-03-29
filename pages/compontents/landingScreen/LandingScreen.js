
import React from 'react';
import ScrollButton from './ScrollButton';
import {TranslatedContext} from '../..';

export default class LandingScreen extends React.Component{

    render(){
        const {topPoslandingScreen, topPosdownButton}=this.props;
        const styles={
            LandingScreen:{
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
                transform:topPoslandingScreen?'none':'scale(0%)',
                animation:topPoslandingScreen?'onLoadAnimation 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
            },
            name:{
                fontSize:'2rem',
            },
            working:{
                fontSize:'1.6rem',
            },
        }
      return(
        <div id='LandingScreen' style={styles.LandingScreen}>
            <TranslatedContext.Consumer>
            {value=>{
                const {translatedText}=value??{};
                const {LandingScreen}=translatedText??{};
                const {subText}=LandingScreen??{};
                return(
                    <>
                        <div style={styles.header} id='LandingScreenHeader'>
                            <div style={styles.name}>Michał Maruszewski</div>
                            <div style={styles.working}>
                                {subText}
                            </div>
                        </div>
                        {topPosdownButton && <ScrollButton scrollToTop={false} topPos={topPosdownButton} href="#ChangeLanguages"/>}
                    </>
                )
                }}
            </TranslatedContext.Consumer>
        </div>
      );
    }
}