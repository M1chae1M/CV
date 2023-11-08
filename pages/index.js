import React, {Component} from 'react';
import Courses from './components/education/Courses';
import Contact from './components/contact/Contact';
import AboutMe from './components/abouteMe/AboutMe';
import Projects from './components/cubeGallery/projects/Projects';
import Education from './components/education/Education';
import Enclosure from './components/enclosure/Enclosure';
import SoftSkills from './components/softSkills/SoftSkills';
import Cube from './components/cubeGallery/Cube';
import {allTexts} from './_document';
import ScrollBTN from './components/landingSCR/ScrollBTN';
import LandingSCR from './components/landingSCR/LandingSCR';
import CubeSide from './components/cubeGallery/CubeSide';
import ChangeLANG from './components/changeLanguages/ChangeLANG';
import CodeSkills from './components/cubeGallery/codeSkills/CodeSkills';
import ProjectCudeSide from './components/cubeGallery/projects/ProjectCubeSide';
import CodeCubeSide from './components/cubeGallery/codeSkills/CodeCubeSide';
import AppContainer from './components/AppContainer';
import AppBody from './components/AppBody';

import {projectCBData} from './projectCBData'
import {programmingCBData} from './programmingCBData'

export const TranslatedCTX=React.createContext();


const CodeSkillsSides=()=>(
  programmingCBData?.sides?.map(({id,src,context,txtColor,startsOn,bgColor})=>
    <CubeSide key={id} XY={100} Z={56} bgColor={bgColor} startsOn={startsOn}>
      <CodeCubeSide src={src} context={context} txtColor={txtColor}/>
    </CubeSide>
  )
)

const CodeSkillsTop=()=>(
  programmingCBData?.top?.map(({id,src,context,color,rotateX,txtColor})=>
    <CubeSide key={id} XY={100} Z={56} bgColor={color} rotateX={rotateX}>
      <CodeCubeSide src={src} context={context} txtColor={txtColor}/>
    </CubeSide>
  )
)

const ProjectsSides=()=>(
  projectCBData.sides?.map(({id,url,alt,src,startsOn})=>
    <CubeSide key={id} XY="150" Z="81" startsOn={startsOn}>
      <ProjectCudeSide href={url} alt={alt} src={src}/>
    </CubeSide>
  )
)
const ProjectsTop=()=>(
  projectCBData.top?.map(({id,url,alt,src,rotateX})=>
    <CubeSide key={id} XY="150" Z="81" rotateX={rotateX}>
      <ProjectCudeSide href={url} alt={alt} src={src}/>
    </CubeSide>
  )
)

export default class App extends Component{
  state={
    language:'PL',
    translatedTXT:allTexts.polish,
    pageHeight:0,
  }
  render(){
    const {translatedTXT, language}=this.state;
    const changeLANG=(e)=>{
      this.setState(
        e.target.alt.split(' ')[0]==='PL'?
        {translatedTXT:allTexts.polish, language:'PL'}:
        {translatedTXT:allTexts.english, language:'EN'}
      );
    }
    return(
      <TranslatedCTX.Provider value={{translatedTXT}}>
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