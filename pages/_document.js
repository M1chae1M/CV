import {Html, Head, Main, NextScript} from 'next/document';

const howLong=Math.round((new Date()-new Date(2022, 7, 1))/2678400000);

export default function Document(){
  return (
    <Html lang="pl">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}

export const Colors=[
    'yellow',
    'darkblue',
    'white',
    'rgb(114 191 227)',
    'rgb(43 91 132)',
    'rgb(0 138 255)',
];

export const allTexts={
polish:{
    LandingSCR:{
        subText:'Przyszły programista'
    },
    AboutMe:{
        header:'O mnie',
        content:`Technik informatyk. Tworzę aplikacje webowe w react'cie od ${howLong} miesięcy. Doświadczenie w pracy jako serwisant oraz młodszy specjalista od konfiguracji serwerów wydruku podążającego, więc rozwiązywanie problemów i samodzielne ich wykrywanie to moja codzienność. Obecnie mieszkam w Lublinie i jestem zainteresowany pracą w tej lokalizacji, lub jej okolicach, chociaż jestem otwarty na możliwość pracy zdalnej.`,
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
        Download:{
            pdfFile:'CV_Michał_Maruszewski_PL.pdf',
            alt:'Pobierz CV w formacie PDF',
        },
    },
    SoftSkills:{
        header:'Umiejętności miękkie',
        content:['Umiejętność pracy pod presją czasu','Zdolność do szybkiego przyswajania wiedzy','Komunikatywność','Chęć poświęcania wolnego czasu na poszerzanie swoich kompetencji zawodowych','Umiejętność pracy w zespole','Umiejętność pracy w stresie'],
    },
    CodeSkills:"Ulubione technologie: ",
    Projects:"Projekty: ",
    Enclosure:{
        content:'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przeprowadzenia rekrutacji na stanowisko.',
    },
},
english:{
    LandingSCR:{
        subText:'Future programmer'
    },
    AboutMe:{
        header:'About me',
        content:`IT specialist. I've been creating web applications in react for ${howLong} months. Experience in working as a service technician and a junior specialist in the configuration of remote print servers, so solving problems and detecting them on my own is my everyday life. I currently reside in Lublin and I am interested in working in this location, although I am open to the possibility of remote work.`,
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
        Download:{
            pdfFile:'CV_Michał_Maruszewski_EN.pdf',
            alt:'Download CV in PDF',
        },
    },
    SoftSkills:{
        header:'Soft skills',
        content:['Ability to work under time pressure','Communicative','Ability to acquire knowledge quickly','I am good at working in a group','Expanding professional competences in free time','Ability to work under stress'],
    },
    CodeSkills:"Favorite technologies: ",
    Projects:"Projects: ",
    Enclosure:{
        content:"I hereby give consent for my personal date to be processed for the purpose of conducting recruitment for the position for which I'm applying.",
    },
},
}