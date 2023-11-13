import {Html, Head, Main, NextScript} from 'next/document';
import texts from '@/config/texts.json'
import _ from 'lodash'

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

const howLong=Math.round((new Date()-new Date(2022, 7, 1))/2678400000);

const AboutMeWithActualTime={
  polish:{
    AboutMe:{
      content:`Technik informatyk. Tworzę aplikacje webowe w react'cie od ${howLong} miesięcy. 3 miesiące praktyk jako junior backend developer (node.js). Doświadczenie w pracy jako serwisant oraz młodszy specjalista od konfiguracji serwerów wydruku podążającego. Obecnie mieszkam w Lublinie i jestem zainteresowany pracą w tej lokalizacji, lub jej okolicach, chociaż jestem otwarty na możliwość pracy zdalnej.`,
    },
  },
  english:{
    AboutMe:{
      // content:`IT specialist. I've been creating web applications in react for ${howLong} months. Experience in working as a service technician and a junior specialist in the configuration of remote print servers, so solving problems and detecting them on my own is my everyday life. I currently reside in Lublin and I am interested in working in this location, although I am open to the possibility of remote work.`,
      content:`IT technician. I have been developing web applications in react for ${howLong} months. 3 months internship as a junior backend developer (node.js). Experience working as a service technician and junior follower print server configuration specialist. I currently live in Lublin and am interested in working in or around that location, although I am open to the possibility of working remotely.`,
    },
  },
}

export const allTexts=_.merge(texts,AboutMeWithActualTime)