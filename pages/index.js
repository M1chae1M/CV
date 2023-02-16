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
// import allTexts from './compontents/translatedTexts/allTexts';
import EmptyDivComponent from './compontents/EmptyDivComponent';
import ProgrammingCubeSide from './compontents/cubeGallery/ProgrammingCubeSide';

import reactIMG from './compontents/img/programmingLanguages/React-Logo.svg';
import cssIMG from './compontents/img/programmingLanguages/CSS3_logo.svg.png';
import jsIMG from './compontents/img/programmingLanguages/Javascript_Logo.png';
import htmlIMG from './compontents/img/programmingLanguages/HTML5_Badge.svg.png';

import pokemonApiProject from './compontents/img/preview/pokemonAPI2.png';
import flappyBirdProject from './compontents/img/preview/flappyBird2.png';
import BarIsLoadedProject from './compontents/img/preview/barIsLoaded.e9bdb470137405d374a9.png';
import cssGradientGeneratorProject from './compontents/img/preview/CSSgradientGenerator2.png';
import Head from 'next/head';

var allTexts={
  polish:{
      LandingScreen:{
          subText:'Przyszły programista'
      },
      AboutMe:{
          header:'O mnie',
          // content:"Technik informatyk. Tworzę aplikacje webowe w react'cie od pół roku. Doświadczenie w pracy jako serwisant oraz młodszy specjalista od konfiguracji serwerów wydruku podążającego, więc rozwiązywanie problemów i samodzielne ich wykrywanie to moja codzienność. Aktualnie zaczynam zapoznawać się z technologiami takimi jak: next.js i typescript.",
          content:"Technik informatyk. Tworzę aplikacje webowe w react'cie od pół roku. Doświadczenie w pracy jako serwisant oraz młodszy specjalista od konfiguracji serwerów wydruku podążającego, więc rozwiązywanie problemów i samodzielne ich wykrywanie to moja codzienność. Aktualnie uczę się takich technologii jak next.js i typescript. Obecnie mieszkam w Lublinie i jestem zainteresowany pracą w tej lokalizacji, lub jej okolicach, chociaż jestem otwarty na możliwość pracy zdalnej.",
      },
      Education:{
          header:'Edukacja',
          content:[
              {date:'2016',description:'ZSEN (ukończono w 2022)'},
              {date:'2022',description:'Studia Informatyczne I stopnia Akademia WSEI w Lublinie (obecnie)'},
          ],
      },
      Courses:{
          header:'Ukończone kursy',
          content:[
              {date:'2018',description:'ECDL B3 (pakiet biurowy MS Word)'},
              {date:'2018',description:'ECDL B4 (pakiet biurowy MS Excel)'},
              {date:'2019',description:'CISCO Networking Academy'},
              {date:'2019',description:'ECDL S6 (edycja i tworzenie stron internetowych)'},
              {date:'2019',description:'ECDL S1 ( pakiet biurowy MS Access)'},
              {date:'2021',description:'Edytowanie projektów 3D oraz ich wydruk na drukarkach 3D'},
              {date:'2022',description:'Szkolenie w zakresie Radiowego Systemu Inteligentnego Domu'},
              {date:'2022',description:'Szkolenie z konfiguracji serwerów wydruku podążającego (SafeQ)'},
              {date:'2022',description:'Szkolenie z konfiguracji serwerów wydruku podążającego (OptimiDoc)'},
          ],
      },
      Contact:{
          header:'Kontakt',
          phone:'Telefon',
          repository:'Moje repozytorium',
          Download:{
              downloadedFileName:'CV_Michał_Maruszewski_PL.pdf',
              alt:'Pobierz CV w formacie PDF',
          },
      },
      SoftSkills:{
          header:'Umiejętności miękkie',
          content:['Umiejętność pracy pod presją czasu','Zdolność do szybkiego przyswajania wiedzy','Komunikatywność','Chęć poświęcania wolnego czasu na poszerzanie swoich kompetencji zawodowych','Umiejętność pracy w zespole','Umiejętność pracy w stresie'],
      },
      ProgrammingSkills:"Moje ulubione języki: ",
      Projects:"Projekty: ",
      Enclosure:{
          content:'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przeprowadzenia rekrutacji na stanowisko.',
      },
  },
  english:{
      LandingScreen:{
          subText:'Future programmer'
      },
      AboutMe:{
          header:'About me',
          // content:"IT specialist. I've been creating web applications in react for 6 months. Experience in working as a service technician and a junior specialist in the configuration of remote print servers, so solving problems and detecting them on my own is my everyday life. I am currently learning next.js and typescript.",
          content:"IT specialist. I've been creating web applications in react for 6 months. Experience in working as a service technician and a junior specialist in the configuration of remote print servers, so solving problems and detecting them on my own is my everyday life. I am currently learning next.js and typescript. I currently reside in Lublin and I am interested in working in this location, although I am open to the possibility of remote work.",
          // Obecnie mieszkam w Lublinie i jestem zainteresowany pracą w tej lokalizacji, lub jej okolicach, chociaż jestem otwarty na możliwość pracy zdalnej.
          // I currently reside in Lublin and I am interested in working in this location, although I am open to the possibility of remote work.
      },
      Education:{
          header:'Education',
          content:[
              {date:'2016',description:'ZSEN (finished 2022)'},
              {date:'2022',description:'Computer Science Studies at Akademia WSEI in Lublin (currently)'},
          ],
      },
      Courses:{
          header:'Courses',
          content:[
              {date:'2018',description:'Office package ECDL B3 (MS Word)'},
              {date:'2018',description:'Office package ECDL B4 (MS Excel)'},
              {date:'2019',description:'CISCO Networking Academy'},
              {date:'2019',description:'ECDL S6 (Web Editing Module)'},
              {date:'2019',description:'Office package ECDL S1 (MS Access)'},
              {date:'2021',description:'Editing 3D projects and printing them on 3D printers'},
              {date:'2022',description:'Course of the Radio Smart Home System'},
              {date:'2022',description:'Configuration of remote print servers (Safe Q)'},
              {date:'2022',description:'Configuration of remote print servers (Optimidoc)'},
          ],
      },
      Contact:{
          header:'Contact',
          phone:'Phone',
          repository:'My repository',
          Download:{
              downloadedFileName:'CV_Michał_Maruszewski_EN.pdf',
              alt:'Download CV in PDF',
          },
      },
      SoftSkills:{
          header:'Soft skills',
          content:['Ability to work under time pressure','Communicative','Ability to acquire knowledge quickly','I am good at working in a group','Expanding professional competences in free time','Ability to work under stress'],
      },
      ProgrammingSkills:"My favorite languages: ",
      Projects:"Projects: ",
      Enclosure:{
          content:"I hereby give consent for my personal date to be processed for the purpose of conducting recruitment for the position for which I'm applying.",
      },
  },
}

var topPositions=[];
export default class App extends React.Component{
  state={
    language:'PL',
    translatedText:allTexts.polish,
    pageHeight:0,
    topPositionsState:{...topPositions},
  }
  componentDidMount(){
    topPositions.landingScreen=document.querySelector('#LandingScreen').getBoundingClientRect().top*(-1)<(document.querySelector('#LandingScreen').getBoundingClientRect().height/2);
    topPositions.downButton=(document.querySelector('#LandingScreen').getBoundingClientRect().top+document.querySelector('#LandingScreen').getBoundingClientRect().height-100)>0;
    this.setState({topPositionsState:{...topPositions},pageHeight:window.screen.height});
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
      topPositions.downButton=(document.querySelector('#LandingScreen').getBoundingClientRect().top+document.querySelector('#LandingScreen').getBoundingClientRect().height-100)>0;
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
      <div id='App' style={styles.App} onScroll={scrollPage} onLoad={scrollPage}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet"/>
        </Head>
        <ScrollButton  href="#LandingScreen" scrollToTop={true}/>
        <LandingScreen 
          text={this.state.translatedText.LandingScreen}
          topPositionslandingScreen={this.state.topPositionsState.landingScreen}
          topPositionsdownButton={this.state.topPositionsState.downButton}
        />
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
                    [<ProgrammingCubeSide src={jsIMG.src} context="JS"/>,
                    <ProgrammingCubeSide src={reactIMG.src} context="React"/>,
                    <ProgrammingCubeSide src={htmlIMG.src} context="HTML"/>,
                    <ProgrammingCubeSide src={cssIMG.src} context="CSS"/>]
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
                        <img src={flappyBirdProject.src} style={styles.img} alt='flappy bird project preview img' draggable={false}/>
                      </div></a>,
                      <a href='https://github.com/M1chae1M/CSS-Gradient-Generator' target="_blank" rel="noreferrer" draggable={false}>
                      <div id='cubeSideWithcssGradientGeneratorProject' style={styles.CubeSideWithProject}>
                        <img src={cssGradientGeneratorProject.src} style={styles.img} alt='css gradient generator project preview img' draggable={false}/>
                      </div></a>,
                      <a href='https://github.com/M1chae1M/bar_is_loaded' target="_blank" rel="noreferrer" draggable={false}>
                      <div id='cubeSideWithBarIsLoadedProject' style={styles.CubeSideWithProject}>
                        <img src={BarIsLoadedProject.src} style={styles.img} alt='bar is loaded project preview img' draggable={false}/>
                      </div></a>,
                      <a href='https://github.com/M1chae1M/training_of_fetch_API' target="_blank" rel="noreferrer" draggable={false}><div id='cubeSideWithpokemonApiProject' style={styles.CubeSideWithProject}>
                        <img src={pokemonApiProject.src} style={styles.img} alt='pokemon api project preview img' draggable={false}/>
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