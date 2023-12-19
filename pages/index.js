import React,{Component} from 'react';
import Courses from './components/education/Courses';
import Contact from './components/contact/Contact';
import AboutMe from './components/abouteMe/AboutMe';
import Projects from './components/cubeGallery/projects/Projects';
import Education from './components/education/Education';
import Enclosure from './components/enclosure/Enclosure';
import SoftSkills from './components/softSkills/SoftSkills';
import Cube from './components/cubeGallery/Cube';
import {texts} from '@/components/texts';
import ScrollBTN from './components/landingSCR/ScrollBTN';
import LandingSCR from './components/landingSCR/LandingSCR';
import ChangeLANG from './components/changeLanguages/ChangeLANG';
import CodeSkills from './components/cubeGallery/codeSkills/CodeSkills';
import AppContainer from './components/AppContainer';
import AppBody from './components/AppBody';
import ProjectsSides from './components/cubeGallery/projects/ProjectsSides';
import ProjectsTop from './components/cubeGallery/projects/ProjectsTop';
import CodeSkillsSides from './components/cubeGallery/codeSkills/CodeSkillsSides';
import CodeSkillsTop from './components/cubeGallery/codeSkills/CodeSkillsTop';

export const TranslatedCTX=React.createContext();

export default class App extends Component{
  state={
    language:'PL',
    translatedTXT:texts.polish,
  }
  render(){
    const {translatedTXT, language}=this.state;
    const changeLANG=(e)=>this.setState(
      e.target.alt.split(' ')[0]==='PL'?
      {translatedTXT:texts.polish, language:'PL'}:
      {translatedTXT:texts.english, language:'EN'}
    )
    return(
      <TranslatedCTX.Provider value={{translatedTXT,language}}>
        <AppContainer>
          <ScrollBTN href="#LandingSCR" scrollToTop={true}/>
          <LandingSCR/>
          <ChangeLANG onClick={changeLANG} language={language}/>
          <AppBody>
            <AboutMe/>
            <Education/>
            <CodeSkills>
              <Cube height={100} XY="100" Z="56">
                <CodeSkillsSides/>
                <CodeSkillsTop/>
              </Cube>
            </CodeSkills>
            <SoftSkills/>
            <Courses/>
            <Projects>
              <Cube height={150} XY="150" Z="81">
                <ProjectsSides/>
                <ProjectsTop/>
              </Cube>
            </Projects>
            <Contact language={language}/>
          </AppBody>
          <Enclosure/>
        </AppContainer>
      </TranslatedCTX.Provider>
    )
  }
}