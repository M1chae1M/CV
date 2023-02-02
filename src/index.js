import React from 'react';
import ReactDOM from 'react-dom/client';
import Courses from './compontents/Courses';
import Contact from './compontents/Contact';
import AboutMe from './compontents/AboutMe';
import Education from './compontents/Education';
import Enclosure from './compontents/Enclosure';
import SoftSkills from './compontents/SoftSkills';
import Cube from './compontents/cubeGallery/Cube';
import ScrollButton from './compontents/ScrollButton';
import LandingScreen from './compontents/LandingScreen';
import ChangeLanguages from './compontents/ChangeLanguages';
import allTexts from './compontents/translatedTexts/allTexts';
import EmptyDivComponent from './compontents/EmptyDivComponent';
import ProgrammingCubeSide from './compontents/cubeGallery/ProgrammingCubeSide';

import reactIMG from './img/programmingLanguages/React-Logo.svg';
import cssIMG from './img/programmingLanguages/CSS3_logo.svg.png';
import jsIMG from './img/programmingLanguages/Javascript_Logo.png';
import htmlIMG from './img/programmingLanguages/HTML5_Badge.svg.png';

import pokemonApiProject from './img/preview/pokemonAPI2.png';
import flappyBirdProject from './img/preview/flappyBird2.png';
import BarIsLoadedProject from './img/preview/barIsLoaded.e9bdb470137405d374a9.png';
import cssGradientGeneratorProject from './img/preview/CSSgradientGenerator2.png';

import './index.css';

var topPositions=[];
class App extends React.Component{
  state={
    language:'PL',
    translatedText:allTexts.polish,
    pageHeight:window.screen.height,
    topPositionsState:{...topPositions},
  }
  render(){
    const styles={
      App:{
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
        overflowX:'hidden',
        position:'relative',
        backgroundColor:'var(--bodyBackground)',
        justifyContent:'center',
      },
      AppBody:{
        width:'80%',
        position:'relative',
        display:'grid',
        gridTemplateColumns:'repeat(2, auto)',
        gridAutoRows:'auto',
        justifyItems:'center',
        justifyContent:'center',
        gap:'10px',
        marginBottom:'5px',
      },
      frame:{
        animation:'sssc 0.5s ease-in-out both',
        height:'auto',
        alignItems:'center',
        display:'grid',
        width:'300px',
        borderRadius:'15px',
        padding:'15px',
        boxShadow:'2px 2px rgb(37 32 217 / 70%)',
        border:'solid 3px rgb(27 25 116 / 80%)',
        color:'var(--textColor)',
        marginTop:'5px',
        overflow:'hidden',
      },
      frameHeader:{
        position:'absolute',
        top:'0%',
        textAlign:'center',
        width:'100%',
        borderBottom:'solid violet 1px',
        fontFamily:"'Rubik Mono One', sans-serif",



        fontSize:'0.93rem',
      },
      img:{
        height:'100%',
      },
      Softskills:{
        gridColumn:'1',
      },
      Courses:{
        gridColumn:'2',
        gridRow:'2/4',
      },
      CubeSideWithProject:{
        display:'flex',
        justifyContent:'center',
        height:'100%',
        width:'100%',
      },
    }
    const scrollPage=()=>{
      let pageHeight=document.querySelector('#LandingScreen').getBoundingClientRect().height;

      topPositions.landingScreen=document.querySelector('#LandingScreen').getBoundingClientRect().top*(-1)<(document.querySelector('#LandingScreen').getBoundingClientRect().height/2);
      topPositions.aboutMe=document.querySelector('#AboutMeHeader').getBoundingClientRect().top<pageHeight;
      topPositions.education=document.querySelector('#EducationHeader').getBoundingClientRect().top<pageHeight;
      topPositions.programmingSkills=document.querySelector('#ProgrammingSkillsHeader').getBoundingClientRect().top<pageHeight;
      topPositions.softskills=document.querySelector('#SoftskillsHeader').getBoundingClientRect().top<pageHeight;
      topPositions.courses=document.querySelector('#CoursesHeader').getBoundingClientRect().top<pageHeight;
      topPositions.projects=document.querySelector('#ProjectsHeader').getBoundingClientRect().top<pageHeight;
      topPositions.contact=document.querySelector('#ContactHeader').getBoundingClientRect().top<pageHeight;
      
      this.setState({topPositionsState:{...topPositions}, pageHeight:pageHeight});
    }
    const ChangeLanguage=(e)=>{
      if(e.target.alt.split(' ')[0]==='PL'){
        this.setState({translatedText:allTexts.polish,language:'PL'});
      }
      else{
        this.setState({translatedText:allTexts.english,language:'EN'});
      }
    }
    return(
      <div id='App' style={styles.App} onScroll={scrollPage}
      
      onLoad={scrollPage}
      >
        <ScrollButton  href="#LandingScreen" scrollToTop={true}/>
        <LandingScreen text={this.state.translatedText.LandingScreen} topPositions={this.state.topPositionsState.landingScreen}/>
        <ChangeLanguages ChangeLanguage={ChangeLanguage} language={this.state.language}/>
        <div style={styles.AppBody} id='AppBody'>
          <div id='AboutMeFrame' className='frame' style={styles.frame} name='frame'>
            <div id='AboutMeHeader' style={styles.frameHeader}>{this.state.translatedText.AboutMe.header}</div>
            <AboutMe
              text={this.state.translatedText.AboutMe}
              topPositions={this.state.topPositionsState.aboutMe}
            />
          </div>
          <div id='Education' className='frame' style={styles.frame}>
            <div id='EducationHeader' style={styles.frameHeader}>{this.state.translatedText.Education.header}</div>
            <Education
              topPositions={this.state.topPositionsState.education}
              text={this.state.translatedText.Education}
            />
          </div>
          <div id='ProgrammingSkills' className='frame' style={styles.frame}>
            <div id='ProgrammingSkillsHeader' style={styles.frameHeader}>{this.state.translatedText.ProgrammingSkills}</div>
            {
              this.state.topPositionsState.programmingSkills===true?
                <Cube
                  topPositions={this.state.topPositionsState.programmingSkills}
                  XY="100"
                  Z="56"
                  Side={
                    [<ProgrammingCubeSide src={jsIMG} context="JS"/>,
                    <ProgrammingCubeSide src={reactIMG} context="React"/>,
                    <ProgrammingCubeSide src={htmlIMG} context="HTML"/>,
                    <ProgrammingCubeSide src={cssIMG} context="CSS"/>]
                  }
                />
                  :<EmptyDivComponent height="100"/>
            }
          </div>
          <div id='Softskills' className='frame' style={{...styles.Softskills,...styles.frame}}>
            <div id='SoftskillsHeader' style={styles.frameHeader}>{this.state.translatedText.SoftSkills.header}</div>
            <SoftSkills
              text={this.state.translatedText.SoftSkills}
              topPositions={this.state.topPositionsState.softskills}
            />
          </div>
          <div id='CoursesFrame' className='frame' style={{...styles.Courses,...styles.frame}}>
            <div id='CoursesHeader' style={styles.frameHeader}>{this.state.translatedText.Courses.header}</div>
            <Courses
              topPositions={this.state.topPositionsState.courses}
              text={this.state.translatedText.Courses}
            />
          </div>
          <div id='Projects' className='frame' style={styles.frame}>
            <div id='ProjectsHeader' style={styles.frameHeader}>{this.state.translatedText.Projects}</div>
              {
                this.state.topPositionsState.projects===true?
                  <Cube
                    topPositions={this.state.topPositionsState.projects}
                    XY="150"
                    Z="81"
                    Side={
                      [<a href='https://github.com/M1chae1M/my_own_floppy_bird_copy_in_react' target="_blank" rel="noreferrer" draggable={false}>
                      <div id='cubeSideWithFlappyBirdProject' style={styles.CubeSideWithProject}>
                        <img src={flappyBirdProject} style={styles.img} alt='flappy bird project preview img' draggable={false}/>
                      </div></a>,
                      <a href='https://github.com/M1chae1M/CSS-Gradient-Generator' target="_blank" rel="noreferrer" draggable={false}>
                      <div id='cubeSideWithcssGradientGeneratorProject' style={styles.CubeSideWithProject}>
                        <img src={cssGradientGeneratorProject} style={styles.img} alt='css gradient generator project preview img' draggable={false}/>
                      </div></a>,
                      <a href='https://github.com/M1chae1M/bar_is_loaded' target="_blank" rel="noreferrer" draggable={false}>
                      <div id='cubeSideWithBarIsLoadedProject' style={styles.CubeSideWithProject}>
                        <img src={BarIsLoadedProject} style={styles.img} alt='bar is loaded project preview img' draggable={false}/>
                      </div></a>,
                      <a href='https://github.com/M1chae1M/training_of_fetch_API' target="_blank" rel="noreferrer" draggable={false}><div id='cubeSideWithpokemonApiProject' style={styles.CubeSideWithProject}>
                        <img src={pokemonApiProject} style={styles.img} alt='pokemon api project preview img' draggable={false}/>
                      </div></a>]
                    }
                  />
                    :<EmptyDivComponent height="150"/>
              }
          </div>
          <div id='ContactFrame' className='frame' style={styles.frame}>
            <div id='ContactHeader' style={styles.frameHeader}>{this.state.translatedText.Contact.header}</div>
            <Contact
              text={this.state.translatedText.Contact}
              topPositions={this.state.topPositionsState.contact}
              language={this.state.language}
            />
          </div>
        </div>
        <Enclosure text={this.state.translatedText.Enclosure}/>
      </div>
    );
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);