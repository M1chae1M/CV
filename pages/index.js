import React, {Component} from 'react';
import Courses from './compontents/education/Courses';
import Contact from './compontents/contact/Contact';
import AboutMe from './compontents/abouteMe/AboutMe';
import Projects from './compontents/cubeGallery/projects/Projects';
import Education from './compontents/education/Education';
import Enclosure from './compontents/enclosure/Enclosure';
import SoftSkills from './compontents/softSkills/SoftSkills';
import Cube from './compontents/cubeGallery/Cube';
import {allTexts, CubeSideColors} from './_document';
import ScrollButton from './compontents/landingScreen/ScrollButton';
import LandingScreen from './compontents/landingScreen/LandingScreen';
import CubeSide from './compontents/cubeGallery/CubeSide';
import ChangeLanguages from './compontents/changeLanguages/ChangeLanguages';
import ProgrammingSkills from './compontents/cubeGallery/programmingSkills/ProgrammingSkills';
import ProjectCudeSide from './compontents/cubeGallery/projects/ProjectCubeSide';
import ProgrammingCubeSide from './compontents/cubeGallery/programmingSkills/ProgrammingCubeSide';

import reactIMG from './compontents/img/programmingLanguages/React-Logo.svg';
import cssIMG from './compontents/img/programmingLanguages/CSS3_logo.svg.png';
import jsIMG from './compontents/img/programmingLanguages/Javascript_Logo.png';
import htmlIMG from './compontents/img/programmingLanguages/HTML5_Badge.svg.png';

import chessProject from './compontents/img/preview/chess.png';
import pokemonApiProject from './compontents/img/preview/pokemonAPI2.png';
import flappyBirdProject from './compontents/img/preview/flappyBird2.png';
import cssGradientGeneratorProject from './compontents/img/preview/CSSgradientGenerator2.png';

const topPos=[];

export const TranslatedContext=React.createContext();

export default class App extends Component{
  state={
    language:'PL',
    translatedText:allTexts.polish,
    pageHeight:0,
    topPosState:{...topPos},
  }
  componentDidMount(){
    this.scrollPage(this);
  }
  scrollPage(component){
    const getTop=(by)=>{return document?.querySelector(`#${by}`)?.getBoundingClientRect()?.top};

    let pageHeight=document.querySelector('#LandingScreen').getBoundingClientRect().height;

    topPos.landingScreen=getTop('LandingScreen')*(-1)<(pageHeight/2);
    topPos.downButton=(getTop('LandingScreen')+pageHeight-100)>0;

    topPos.aboutMe=getTop('AboutMeHeader')<pageHeight;
    topPos.education=getTop('EducationHeader')<pageHeight;
    topPos.programmingSkills=getTop('ProgrammingSkillsHeader')<pageHeight;
    topPos.softskills=getTop('SoftskillsHeader')<pageHeight;
    topPos.courses=getTop('CoursesHeader')<pageHeight;
    topPos.projects=getTop('ProjectsHeader')<pageHeight;
    topPos.contact=getTop('ContactHeader')<pageHeight;

    component.setState({topPosState:{...topPos}, pageHeight:pageHeight});
  }
  render(){
    const {translatedText, topPosState, language}=this.state;
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
      frames:{
        frame:{
          animation:'onLoadAnimation 0.5s ease-in-out both',
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
      },
    }
    const ChangeLanguage=(e)=>{
      this.setState(
        e.target.alt.split(' ')[0]==='PL'?
        {translatedText:allTexts.polish, language:'PL'}:
        {translatedText:allTexts.english, language:'EN'}
      );
    }
    const scrollPageFNC=()=>this.scrollPage(this);
    const frames=styles.frames;
    return(
      <TranslatedContext.Provider value={{translatedText, frames}}>
        <div id='App' style={styles.App} onScroll={scrollPageFNC} onLoad={scrollPageFNC}>
          <ScrollButton  href="#LandingScreen" scrollToTop={true}/>
          <LandingScreen topPoslandingScreen={topPosState.landingScreen} topPosdownButton={topPosState.downButton}/>
          <ChangeLanguages ChangeLanguage={ChangeLanguage} language={language}/>
          <div style={styles.AppBody} id='AppBody'>
            <AboutMe topPos={topPosState.aboutMe}/>
            <Education topPos={topPosState.education}/>
            <ProgrammingSkills>
              {topPosState.programmingSkills&&
              <Cube height={100} topPos={topPosState.programmingSkills} XY="100" Z="56">
                <CubeSide XY={100} Z={56} bgColor={CubeSideColors[0]} startsOn={(0*90)}>
                  <ProgrammingCubeSide src={jsIMG.src} context="JS"/>
                </CubeSide>
                <CubeSide XY={100} Z={56} bgColor={CubeSideColors[1]} startsOn={(1*90)}>
                  <ProgrammingCubeSide src={reactIMG.src} context="React"/>
                </CubeSide>
                <CubeSide XY={100} Z={56} bgColor={CubeSideColors[2]} startsOn={(2*90)}>
                  <ProgrammingCubeSide src={htmlIMG.src} context="HTML"/>
                </CubeSide>
                <CubeSide XY={100} Z={56} bgColor={CubeSideColors[3]} startsOn={(3*90)}>
                  <ProgrammingCubeSide src={cssIMG.src} context="CSS"/>
                </CubeSide>
              </Cube>}
            </ProgrammingSkills>
            <SoftSkills topPos={topPosState.softskills}/>
            <Courses topPos={topPosState.courses}/>
            <Projects>
              {topPosState.projects&&
              <Cube height={150} topPos={topPosState.projects} XY="150" Z="81">
                <CubeSide XY="150" Z="81" bgColor={CubeSideColors[0]} startsOn={(0*90)}>
                  <ProjectCudeSide href='https://github.com/M1chae1M/my_own_floppy_bird_copy_in_react' id='cubeSideWithFlappyBirdProject' alt='flappy bird project preview img' src={flappyBirdProject.src}/>
                </CubeSide>
                <CubeSide XY="150" Z="81" bgColor={CubeSideColors[1]} startsOn={(1*90)}>
                  <ProjectCudeSide href='https://github.com/M1chae1M/CSS-Gradient-Generator' id='cubeSideWithcssGradientGeneratorProject' alt='css gradient generator project preview img' src={cssGradientGeneratorProject.src}/>
                </CubeSide>
                <CubeSide XY="150" Z="81" bgColor={CubeSideColors[2]} startsOn={(2*90)}>
                  <ProjectCudeSide href='https://github.com/M1chae1M/chess' id='chessProject' alt='chess project preview img' src={chessProject.src}/>
                </CubeSide>
                <CubeSide XY="150" Z="81" bgColor={CubeSideColors[3]} startsOn={(3*90)}>
                  <ProjectCudeSide href='https://github.com/M1chae1M/training_of_fetch_API' id='cubeSideWithpokemonApiProject' alt='pokemon api project preview img' src={pokemonApiProject.src}/>
                </CubeSide>
              </Cube>}
            </Projects>
            <Contact topPos={topPosState.contact} language={language}/>
          </div>
          <Enclosure/>
        </div>
      </TranslatedContext.Provider>
    );
  }
}