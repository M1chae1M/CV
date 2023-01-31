
import React from 'react';
import ScrollButton from './ScrollButton';

class LandingScreen extends React.Component{
    render(){
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
            },
            header:{
                fontFamily:"'Rubik Mono One', sans-serif",
                transform:this.props.topPositions===true?'none':'scale(0%)',
                animation:this.props.topPositions===true?'sssc 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
            },
            name:{
                fontSize:'2rem',
            },
            working:{
                fontSize:'1.6rem',
            },
        }
      return(
        <div id='LandingScreen' style={styles.LandingScreen}
        
        >
            <div style={styles.header}
            
            >
                <div style={styles.name}>Michał Maruszewski</div>
                <div style={styles.working}>{this.props.text.subText}</div>
            </div>
            <ScrollButton scrollToTop={false} href="#ChangeLanguages"/>
        </div>
      );
    }
  }
  
  export default LandingScreen;